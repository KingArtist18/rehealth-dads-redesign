import Hero from '../components/Hero' // Top banner section
import Problem from '../components/Problem' // "What keeps good dads stuck"
import SmallWins from '../components/SmallWins' // The copper path section

export default function Home() {
  return (
    <>
      {/* Sections appear in this order, top to bottom */}
      <Hero />
      <Problem />
      <SmallWins />
    </>
  )
}