// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
//=================================================================

var header = {
  name: {
    firstname: 'Dmytro ',
    lastname: 'Ivanov ',
  },

  position: 'Junior Fullstack JS Developer',
  salary: '600 $ per month',
  address: 'Greese, Crete',
}
var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: ` Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: ` Pet project for parsing sport betting data from different platforms ( odds ) and sport
          statistics
          (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
      hobbies: [
        {
          name: 'art',
          isMain: true,
        },
        {
          name: 'gym',
          isMain: false,
        },
        {
          name: 'dance',
          isMain: true,
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: 10,
        },
        {
          name: 'Hendlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VC Code',
          point: 10,
        },
        {
          name: 'GIT',
          point: 10,
        },
        {
          name: 'Terminal',
          point: 10,
        },
        {
          name: 'NPM',
          point: 10,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
    },

    footer,
  })
})
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },
    header,

    main: {
      certificates: [
        {
          name: 'kjkk',
          id: 12345,
        },
        {
          name: ' QQQ',
          id: 54321,
        },
        {
          name: 'QGSSS',
          id: 78945,
        },
      ],

      education: [
        {
          name: 'Babygarden',
          isEnd: true,
        },
        {
          name: 'School',
          isEnd: false,
        },
        {
          name: 'Colege',
          isEnd: true,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },
    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: '"IT Brains"',
            url: null,
          },
          duration: {
            from: '16.05.2023',
            to: '28.04.3000',
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: ' IT homework',
              stacks: [
                { name: 'React.js' },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              stackAmoGnt: 5,
              awardAmoGnt: 9,
              awards: [
                { name: 'Winer 1' },
                { name: 'Winer 2' },
              ],
            },
          ],
        },
        // {
        //   position: 'Junior Fullstack Developer',
        //   company: {
        //     name: '"IT Brains"',
        //     url: 'https://it-brains.com.ua/study/',
        //   },
        //   duration:'https://www.work.ua/jobs/by-company/1992511/'
        //     from: '16.05.2023',
        //     to: null,
        //   },
        // },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    layout: 'basik',
    title: 'Program',
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        programs: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
