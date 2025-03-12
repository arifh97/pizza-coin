import Accordion from './Accordion'
import MarqueeTop from './MarqueeTop'

export default function Faq() {

  const item = [
    {
      title: 'The Journey Begins – Getting Noticed and Starting the Pre-Sale',
      body: `<p>It’s time to introduce the <span class="font-bold font-dm text-black">PEPIZ Coin</span> to the world! We’re kicking off our pre-sale and focusing on building a passionate community that will support us from day one – together, we’ll make PEPIZ a true phenomenon!</p>`,
    },
    {
      title: 'The Hype Rises – Advertising and Listing on Major Platforms',
      body: `<p>With a clear goal ahead, we’re setting sail for the next step! We’ll ramp up visibility with targeted ads on major crypto websites and platforms like CoinMarketCap and CoinGecko – <span class="font-dm font-bold text-black">PEPIZ</span> won’t be ignored!</p>`,
    },
    {
      title: 'The Big Moment – Completing the Pre-Sale and Going Live on Raydium',
      body: `<p>Once the pre-sale ends, we’ll go live on Raydium – the first step toward a successful future! But the journey doesn’t stop here: more exciting milestones and stages will be revealed once we’re live on <span class="font-dm font-bold text-black"> Raydium</span>, taking over the world!</p>`,
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