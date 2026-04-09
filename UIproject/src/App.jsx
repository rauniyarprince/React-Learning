import './App.css'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

function App() {

  const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60',
    intro: 'Prime customers that have access to bank credit and are satisfied with the current access',
    id: '1',
    color: 'blue',
    tag: 'Satisfied'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=600&auto=format&fit=crop&q=60',
    intro: 'Prime customers that have access to bank credit but are not satisfied with the current service',
    id: '2',
    color: 'green',
    tag: 'Underserved'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1663134310533-fc3b59225810?w=600&auto=format&fit=crop&q=60',
    intro: 'Customers from near-prime and sub-prime segments with limited access to bank credit',
    id: '3',
    color: 'red',
    tag: 'Underbanked'
  },
  {
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60',
    intro: 'Customers with no access to formal banking services and excluded from financial systems',
    id: '4',
    color: 'orange',
    tag: 'Unbanked'
  },
  {
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&auto=format&fit=crop&q=60',
    intro: 'Working professionals actively using banking services with high engagement',
    id: '5',
    color: 'purple',
    tag: 'Active Users'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661590867485-c67026a70bc7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww',
    intro: 'Users who prefer digital banking but face occasional technical limitations',
    id: '6',
    color: 'indigo',
    tag: 'Digital Users'
  },
  {
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60',
    intro: 'Young professionals exploring financial products for the first time',
    id: '7',
    color: 'pink',
    tag: 'New Users'
  },
  {
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60',
    intro: 'Customers with stable income and moderate usage of financial services',
    id: '8',
    color: 'teal',
    tag: 'Regular Users'
  },
  {
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60',
    intro: 'Freelancers and gig workers with irregular access to credit facilities',
    id: '9',
    color: 'yellow',
    tag: 'Freelancers'
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60',
    intro: 'Rural users with limited financial awareness and access to banking infrastructure',
    id: '10',
    color: 'gray',
    tag: 'Rural Segment'
  }
];
  return ( 
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  )
}

export default App
