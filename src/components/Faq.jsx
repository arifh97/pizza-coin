import Accordion from './Accordion'
import MarqueeTop from './MarqueeTop'

export default function Faq() {

  const item = [
    {
      title: 'What is $PEPIZ?',
      body: `<p>$PEPIZ is an exciting meme coin project based on the idea that Pepe the Frog is not just a meme, but also the creative mind behind Pepe Pizzeria – a digital pizzeria at the heart of the crypto world. With $PEPIZ, we celebrate humor, community, and the fun of blockchain. It’s more than just a coin; it’s a cultural movement that allows you to be part of a fun and innovative community. Welcome to <span class="font-dm font-bold text-black">Pepe Pizzeria!</span></p>`,
    },
    {
      title: 'How can I participate in staking?',
      body: `<p>Staking is really simple! Just connect your wallet in the staking section on our website and choose the amount you wish to stake. You’ll then be part of the pizza party and earn additional $PEPIZ.</p>`,
    },
    {
      title: 'When does the PRESALE end?',
      body: `<p>The presale will end once the funding goal is reached or when we officially announce its end. Don't miss your chance to secure your share of $PEPIZ! Stay updated through our Telegram and X (formerly Twitter) channels. Act fast before the presale ends!</p>`,
    },
    {
      title: 'On which exchange will the launch take place?',
      body: `<p>The launch of $PEPIZ will take place on Rydium, and you can track the progress and price on platforms like Dextool or Dexscreener. Be part of it and follow along live as the pizzeria kicks off on the blockchain!</p>`,
    },
    {
      title: 'Is there a whitepaper for the project?',
      body: `<p>Yes, we have a detailed <span class="font-dm font-bold text-black">whitepaper</span> that includes all the important details about $PEPIZ and our vision. You’ll find information about our roadmap, long-term goals, and the technology behind the project. The whitepaper is a valuable resource to learn more about our project and the philosophy behind Pepe Pizzeria. Check it out to get a comprehensive overview.</p>`,
    },
    {
      title: 'Important Disclaimer about $PEPIZ as a Meme Coin',
      body: `<p>$PEPIZ is a meme coin project and should be viewed purely as entertainment and for fun. As with all meme coins, the price of $PEPIZ can fluctuate significantly, especially between the presale and the time it goes live on exchanges. The price may vary greatly, and it's important to understand that there are no guarantees of profits. Only invest what you are willing to lose, and be aware of the risks involved. We take no responsibility for any profits or losses. Everyone should act responsibly and remember that this project is for community fun, not speculative gains. <span class="font-dm font-bold text-black">Please note that this is not financial advice.</span></p>`,
    },
  ]
  return (
    <div className="faq bg-[#FFC446] relative z-[1]">
      <MarqueeTop />
      <div className='container'>
        <div className="row justify-center">
          <div className="section-title text-center">
            <h2 className='xl:-mb-3'>FAQ</h2>
          </div>
          <div className='col-12 col-md-11 col-xl-8'>
            <Accordion items={item} activeItem={null} />
          </div>
        </div>
      </div>
    </div>
  )
}