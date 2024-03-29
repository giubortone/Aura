//Agendar cita
import React from 'react'
import back from '../../assets/back.png'
import next from '../../assets/001-next.png'
import { Menu, Transition } from '@headlessui/react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from '../../firebase';
import { getDatabase, ref, set as setFirebase, get, query } from "firebase/database";


import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  set,
  startOfToday,
} from 'date-fns'
import { Fragment, useState } from 'react'
import foto from '../../assets/doctor.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Calendar() {
  const [doctor, setDoctor] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    setDoctor(location.state.doctorSnapshot);
    console.log(doctor ? doctor.key : null);
    console.log("data", doctor ? doctor.data : null);
  }, [])
  const user = auth.currentUser;
  const meetings = [
    {
      id: doctor ? doctor.key : null,
      name: doctor ? doctor.data.username : null,
      imageUrl:
        { foto },
      startDatetime: '2023-03-30T13:00',
      endDatetime: '2023-03-30T14:30',
    },

  ]
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    console.log('proximo mess')
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function agendar() {
    const db = getDatabase();

    get(query(ref(db, 'citas/' + user.uid + '_' + doctor.key + '_' + format(selectedDay, 'dd_MM_yyyy')))).then((snapshot) => {
      if (snapshot.exists()) {
        window.alert('Ya tienes un cita con este doctor este dia')
      } else {
        get(query(ref(db, '/usuarios/clientes/' + user.uid))).then((snapshotCliente) => {
          setFirebase(ref(db, 'citas/' + user.uid + '_' + doctor.key + '_' + format(selectedDay, 'dd_MM_yyyy')), {
            fecha: format(selectedDay, 'dd/MM/yyyy'),
            id_usuario: user.uid,
            nm_usuario: snapshotCliente.val().username,
            nm_doctor: doctor.data.username,
            id_doctor: doctor.key
          }).then(() => {
            window.alert('Cita agendada correctamente')
            navigate('/citas')
          }).catch((error) => {
            window.alert('Ya tienes un cita con este doctor este dia')
            console.log(error);
          });
        }).catch((err) => {
          console.log('----------')
          console.log(err);
        });
      }
    }).catch((error) => {
      console.error(error);
    });



  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  return (
    <div className='flex items-center justify-center min-h-screen from-purple-100 purple via-purple-300 to-purple-500 bg-gradient-to-br'>
      <div className="pt-16 bg-white">
        <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
          <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
            <div className="md:pr-14">
              <div className="flex items-center">
                <h2 className="flex-auto font-semibold text-gray-900">
                  {format(firstDayCurrentMonth, 'MMMM yyyy')}
                </h2>
                <button
                  type="button"
                  onClick={previousMonth}
                  className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Previous month</span>
                  <img className='' src={back} alt='anterior' />
                </button>
                <button
                  onClick={nextMonth}
                  type="button"
                  className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Next month</span>
                  <img className='' src={next} alt='siguiente' />
                </button>
              </div>
              <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                <div>D</div>
                <div>L</div>
                <div>M</div>
                <div>M</div>
                <div>J</div>
                <div>V</div>
                <div>S</div>
              </div>
              <div className="grid grid-cols-7 mt-2 text-sm">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      'py-1.5'
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={classNames(
                        isEqual(day, selectedDay) && 'text-white',
                        !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-purple-500',
                        !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                        !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                        isEqual(day, selectedDay) && isToday(day) && 'bg-purple-500',
                        isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                        !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                        (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                        'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                      )}
                    >
                      <time dateTime={format(day, 'yyyy-MM-dd')}>
                        {format(day, 'd')}
                      </time>
                    </button>

                    <div className="w-1 h-1 mx-auto mt-1">
                      {meetings.some((meeting) =>
                        isSameDay(parseISO(meeting.startDatetime), day)
                      ) && (
                          <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <section className="mt-12 md:mt-0 md:pl-14">
              <h2 className="font-semibold text-gray-900">
                Agendar cita para {' '}
                <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                  {format(selectedDay, 'MMM dd, yyy')}
                </time>
              </h2>
              <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                {selectedDayMeetings.length > 0 ? (
                  selectedDayMeetings.map((meeting) => (
                    <Meeting meeting={meeting} key={meeting.id} />
                  ))
                ) : (
                  <p>No hay citas agendadas para hoy.</p>
                )}
              </ol>
            </section>
          </div>

          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Agendar cita para {' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyy')}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id}
                  />

                ))
              ) : (
                <p>No hay citas agendadas para hoy.</p>
              )}
            </ol>
          </section>

        </div>
      </div>
      {user ?
        <button
          type="button"
          onClick={agendar}
          className="bg-purple-900 rounded-full p-2 px-20 text-white ml-11 flex justify-right">
          <span className="sr-only">Aceptar</span>
          Aceptar
        </button>
        : null}
    </div>
  )
}

function Meeting({ meeting }) {
  let startDateTime = parseISO(meeting.startDatetime)
  let endDateTime = parseISO(meeting.endDatetime)

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <img
        src={meeting.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, 'h:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, 'h:mm a')}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Abrir opciones</span>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Editar
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Cancelar
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]
