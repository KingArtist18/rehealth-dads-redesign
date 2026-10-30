import Hero from '../components/Hero' // Top banner
import Problem from '../components/Problem' // What keeps dads stuck (with a photo)
import Desire from '../components/Desire' // What dads really want
import SmallWins from '../components/SmallWins' // Copper path (with a photo)
import MeetPaul from '../components/MeetPaul' // Short intro to Paul
import Rebuild from '../components/Rebuild' // Teaser for the coaching programme
import CallToAction from '../components/CallToAction' // Final push to get in touch

export default function Home() {
  return (
    <>
      {/* Sections appear in this order, top to bottom */}
      <Hero />
      <Problem />
      <Desire />
      <SmallWins />
      <MeetPaul />
      <Rebuild />
      <CallToAction />
    </>
  )
}