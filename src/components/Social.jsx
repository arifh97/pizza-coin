import twitter from '../assets/img/twitter.svg'
import telegram from '../assets/img/telegram.svg'

export default function Social() {
    const socials = [
        {
            icon: <img src={twitter} alt="Social Icon" />,
            url: "https://x.com/pizpepe",
        },
        {
            icon: <img src={telegram} alt="Social Icon" />,
            url: "https://t.me/+-uqniTrsSvc5ODZh",
        },
    ];
    return (
        <ul className="socials d-flex align-items-center flex-wrap gap-3">
            {socials.map((item, index) => (
                <li key={index}> <a href={item.url} target='_blank'>{item.icon}</a></li>
            ))}
        </ul>
    )
}
