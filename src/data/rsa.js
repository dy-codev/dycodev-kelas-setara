import { markRaw, defineAsyncComponent } from 'vue'

export const rsaSyllabusData = [
  {
    id: 1,
    title: 'Sprint 1: Ramp Safety Concept & Equipment',
    isOpen: false,
    lessons: [
      {
        id: 101,
        title: 'Introduction',
        type: 'theory',
        duration: '2 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        // markdownUrl: '/materi/rsa/aplikasi-media-komunikasi.md',
        component: markRaw(defineAsyncComponent(() => import('../materi/rsa/introduction.md'))),
        content: null
      },
      {
        id: 102,
        title: 'Quiz',
        type: 'practice',
        duration: '1 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        practiceUrl: null,
        markdownUrl: null,
        content: null
      },
      {
        id: 103,
        title: 'Safety Concept',
        type: 'theory',
        duration: '2 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        // markdownUrl: '/materi/rsa/mesin-pencari-informasi-digital.md',
        component: markRaw(defineAsyncComponent(() => import('../materi/rsa/safety-concept.md'))),
        content: null
      },
      {
        id: 104,
        title: 'Quiz',
        type: 'practice',
        duration: '1 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        markdownUrl: '/materi/rsa/quiz.md',
        content: null
      },
      {
        id: 105,
        title: 'Safety Culture',
        type: 'theory',
        duration: '2 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        // markdownUrl: '/materi/rsa/fitur-lanjutan-aplikasi-perkantoran.md',
        component: markRaw(defineAsyncComponent(() => import('../materi/rsa/safety-culture.md'))),
        content: null
      },
      {
        id: 106,
        title: 'Quiz',
        type: 'practice',
        duration: '1 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        markdownUrl: '/materi/rsa/quiz.md',
        content: null
      },
      {
        id: 107,
        title: 'Safety Equipment',
        type: 'theory',
        duration: '1 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        // markdownUrl: '/materi/rsa/integrasi-aplikasi-office.md',
        component: markRaw(defineAsyncComponent(() => import('../materi/rsa/safety-equipment.md'))),
        content: null
      },
      {
        id: 108,
        title: 'Quiz',
        type: 'practice',
        duration: '1 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        markdownUrl: '/materi/rsa/quiz.md',
        content: null
      },
      {
        id: 109,
        title: 'Document Required',
        type: 'theory',
        duration: '1 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        // markdownUrl: '/materi/rsa/integrasi-aplikasi-office.md',
        component: markRaw(defineAsyncComponent(() => import('../materi/rsa/document-required.md'))),
        content: null
      },
      {
        id: 110,
        title: 'Quiz',
        type: 'practice',
        duration: '1 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        markdownUrl: '/materi/rsa/quiz.md',
        content: null
      },
      {
        id: 111,
        title: 'Safety Preparation for Vehicle',
        type: 'theory',
        duration: '1 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        // markdownUrl: '/materi/rsa/integrasi-aplikasi-office.md',
        component: markRaw(defineAsyncComponent(() => import('../materi/rsa/safety-preparation-for-vehicle.md'))),
        content: null
      },
      {
        id: 112,
        title: 'Quiz',
        type: 'practice',
        duration: '1 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        markdownUrl: '/materi/rsa/quiz.md',
        content: null
      },
      {
        id: 113,
        title: 'Mini Project: Webinar',
        type: 'challenge',
        duration: '1 JP',
        isCompleted: false,
        externalVideoUrl: null,
        externalLinks: [
          { title: null, url: null, type: null },
          { title: null, url: null, type: null }
        ],
        pdfUrl: null,
        slideUrl: null,
        videoUrl: null,
        markdownUrl: '/materi/rsa/mini-project-webinar.md',
        content: null
      }
    ]
  },
]