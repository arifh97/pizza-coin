import Accordion from './Accordion'
import MarqueeTop from './MarqueeTop'

export default function Faq() {

  const item = [
    {
      title: 'Who is Pepe Pizzeria Coin? (Name: $PEPIZ)',
      body: `<p>Pepe Pizzeria Coin ($PEPIZ) is an exciting MYMP Point project on the Solana Blockchain, inspired by the well-known cryptocurrency "Pepe". This connection will bring Pepe Pizzeria directly into the vibrant Pepe community. We believe everyone will love this coin as it’s not only humorous and innovative but also resonates with Pepe fans!</p>`,
    },
    {
      title: 'When does the PRESALE end?',
      body: `<p>It’s time to introduce the PEPIZ Coin to the world! We’re kicking off our pre-sale and focusing on building a passionate community that will support us from day one – together, we’ll make PEPIZ a true phenomenon!</p>`,
    },
    {
      title: 'How can I stake?',
      body: `<p>With a clear goal ahead, we’re setting sail for the next step! We’ll ramp up visibility with targeted ads on major crypto websites and platforms like CoinMarketCap and CoinGecko – PEPIZ won’t be ignored!</p>`,
    },
    {
      title: 'On which exchange will the launch take place?',
      body: `<p>Once the pre-sale ends, we’ll go live on Raydium – the first step toward a successful future! But the journey doesn’t stop here: more exciting milestones and stages will be revealed once we’re live on Raydium, taking over the world!</p>`,
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
            <Accordion items={item} activeItem={0} />
          </div>
        </div>
      </div>
    </div>
  )
}