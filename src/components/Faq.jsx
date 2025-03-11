import Accordion from './Accordion'
import MarqueeTop from './MarqueeTop'

export default function Faq() {

  const item = [
    {
      title: 'Title',
      body: `<p>des</p>`,
    },
    {
      title: 'Title',
      body: `<p>des</p>`,
    },
    {
      title: 'Title',
      body: `<p>des</p>`,
    },
    {
      title: 'Title',
      body: `<p>des</p>`,
    },
  ]
  return (
    <div className="faq bg-[#FFC446] relative z-[1]">
      <MarqueeTop />
      <div className='container'>
        <div className="row justify-center">
          <div className="section-title text-center">
            <h2>FAQ</h2>
          </div>
          <div className='col-12 col-md-10 col-lg-8'>
            <Accordion items={item} activeItem={0} />
          </div>
        </div>
      </div>
    </div>
  )
}