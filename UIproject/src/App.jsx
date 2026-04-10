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
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600',
    intro: 'Working professionals actively using banking services with high engagement',
    id: '5',
    color: 'purple',
    tag: 'Active Users'
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600', 
    intro: 'Users who prefer digital banking but face occasional technical limitations',
    id: '6',
    color: 'indigo',
    tag: 'Digital Users'
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600', 
    intro: 'Young professionals exploring financial products for the first time',
    id: '7',
    color: 'pink',
    tag: 'New Users'
  },
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
    intro: 'Customers with stable income and moderate usage of financial services',
    id: '8',
    color: 'teal',
    tag: 'Regular Users'
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600', 
    intro: 'Freelancers and gig workers with irregular access to credit facilities',
    id: '9',
    color: 'yellow',
    tag: 'Freelancers'
  },
  {
    img: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600',
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
