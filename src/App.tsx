import fuchicoWolf from '@assets/fuchico-wolf.webp'
import { IconType } from 'react-icons'
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa6'

interface Contact {
  text: string
  url: string
  icon: IconType
}

function ContactItem({ contact }: { contact: Contact }) {
  const Icon = contact.icon
  return (
    <a href={contact.url} target="_blank" rel="noreferrer" className="text-lg font-bold leading-8">
      <Icon className="inline-block" />
      {` ${contact.text}`}
    </a>
  )
}

function ContactList({ contacts }: { contacts: Contact[] }) {
  return (
    <div className="mt-4">
      {contacts.map((contact, index) => (
        <>
          <ContactItem contact={contact} key={index} />
          {index !== contacts.length - 1 && <br />}
        </>
      ))}
    </div>
  )
}

function App() {
  const contacts: Contact[] = [
    {
      text: '@Fuchico1551',
      url: 'https://twitter.com/Fuchico1551',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      icon: FaTwitter,
    },
    {
      text: '@Fuchico1551',
      url: 'https://t.me/Fuchico1551',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      icon: FaTelegram,
    },
    {
      text: '@fuchicowolf',
      // FIXME: Discord disallows direct profile link
      // ID: 1164178811169034332
      url: 'https://discord.com',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      icon: FaDiscord,
    },
  ]
  return (
    <main className="font-noto-serif-sc flex min-h-screen w-full bg-secondary-200 p-4 md:p-8">
      <div className="relative flex grow">
        <div className="h-full w-12 bg-secondary-100 md:w-36 lg:w-48">
          <div className="bg-pillar mask-slash-stripes h-full w-full" />
        </div>
        <div className="flex flex-col px-4 text-primary-700 md:px-8">
          <div>
            <div className="md:text-10xl text-8xl md:text-9xl">啟淵</div>
            <div className="mt-2 flex flex-row">
              <div className="ml-2 mr-2 w-1 bg-primary-700" />
              <div className="text-4xl md:text-5xl lg:text-6xl [&>span]:block">
                <span>Fuchico</span>
                <span className="font-noto-serif-jp">ふちこ</span>
                <span className="font-noto-serif-kr">후치코</span>
              </div>
            </div>
            <div className="mt-2 md:w-1/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="grow flex flex-col justify-end">
            <ContactList contacts={contacts} />
          </div>
        </div>
        <img src={fuchicoWolf} alt="Avatar image of fuchico" className="absolute bottom-0 right-0 max-w-[50%] opacity-[0.85]" />
      </div>
    </main>
  )
}

export default App
