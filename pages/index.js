import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Work from '../components/work'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Håkan Nylén</title>
        <meta name="description" content="Håkan Nylén - Crystal, Ruby and React developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-3 md:px-0 max-w-3xl mx-auto py-6 font-light">
        <div>
          <h1>Hi, my name is <span className={styles.gradient_text}>Håkan Nylén</span></h1>
          <div className={styles.header_border}/>
        </div>
        <div className="flex flex-col gap-3">
          <p>I am a <span className="font-medium">Crystal, Ruby and React developer</span> based in Stockholm, Sweden. I have been working as a developer since 2014. I have a passion for learning new technologies and solving problems.</p>
          <p>I am currently working as <span className="font-medium">CTO</span> at <strong className="font-medium">Beatly</strong>.</p>
          <p>My current sideproject is <a href="https://www.errordeck.com" className="font-medium hover:underline">Errordeck - Error tracking and monitoring</a>. It is simple an european and more privacy friendly alternative to Sentry, Rollbar, Raygun and Airbrake.</p>
          <p>I am active in the open-source community and have built <a href="https://github.com/confact/stripe.cr" className="font-medium hover:underline">Stripe.cr</a> (Stripe API wrapper in Crystal), <a href="https://github.com/confact/lucky_search" className="font-medium hover:underline">Lucky_search</a>, an elasticsearch plugin for Lucky Framework in Crystal, inspired by searchkick for Ruby on Rails.</p>
          <p>I am interested in privacy and have built multiple encrypted and privacy-friendly services and libraries, like <a href="https://github.com/kindmetrics/kindmetrics" className="font-medium hover:underline">Kindmetrics</a>, a privacy-focused open source web analytics, and <strong className="font-medium">lucky_encrypted</strong>, an attr_encrypted inspired encryption DB for Avram in Lucky Framework.</p>
        
        </div>

        <div className="mt-6 text-sm flex flex-row gap-3">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">Download my Resume</a> <a href="https://www.linkedin.com/in/hakannylen" alt="Visit my linkedin"><svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 310 310"
      version="1.1"
      viewBox="0 0 310 310"
      xmlSpace="preserve"
      className="w-4 h-4 fill-current text-slate-800"
    >
      <g>
        <path d="M72.16 99.73H9.927a5 5 0 00-5 5v199.928a5 5 0 005 5H72.16a5 5 0 005-5V104.73a5 5 0 00-5-5z"></path>
        <path d="M41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341z"></path>
        <path d="M230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 00-5-5h-59.599a5 5 0 00-5 5v199.928a5 5 0 005 5h62.097a5 5 0 005-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 005 5H305a5 5 0 005-5V194.995c0-49.565-9.451-100.234-79.546-100.234z"></path>
      </g>
    </svg></a>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <h2 className="text-2xl font-extrabold">My work</h2>
          <div className="flex flex-col gap-3">

            <Work company="Errordeck" position="Founder" start="2022" end="present" />

            <Work company="Beatly" position="CTO" start="2021" end="present" />

            <Work company="Kindmetrics" position="Founder" start="2020" end="2021" />

            <Work company="Beatly" position="Tech Lead" start="2016" end="2021" />

            <Work company="Fyndiq" position="Integration Developer" start="2014" end="2016" />

            <Work company="Klarna" position="Tech Support" start="2013" end="2014" />

            <Work company="Dirble" position="Founder" start="2011" end="2019" />
          </div>
        </div>
      </main>
    </div>
  )
}
