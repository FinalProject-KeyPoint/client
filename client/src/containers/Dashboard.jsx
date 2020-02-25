import React, { useState } from 'react'
import HistoryList from '../components/HistoryList'
import '../style/dashboard.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchArticles } from '../store/actions'

export default function Dashboard() {
  
  // const dispatch = useDispatch()
  // const localArticles = useSelector(state => state.articles.articles)
  // useEffect(() => {
  //   dispatch(fetchArticles())
  // }, [])

  const [localArticles, setLocalArticles] = useState([
    {
      _id: 'gy167e1yf2d',
      url: 'http://kompas.com',
      keyPoint: [
        'dasytuii578989muanusdybxsasd',
        'dqudw7bod8oastfyguhijoiqpuwoydtqwd9bd',
        'qw89d7g2y683dt7ywqucixukyuqlsac',
        'whskdxlqusadb87ed708623dvos7qbwdxwUKXVAS',
        'asiiiiiii12qwdbqw7d12dbpqwdnqpwd'        
      ],
      createdAt: '25 Feb 2020'
    },
    {
      _id: 'gy167e1yf2d',
      url: 'http://kompas.com',
      keyPoint: [
        'dasytuii578989muanusdybxsasd',
        'dqudw7bod8oastfyguhijoiqpuwoydtqwd9bd',
        'qw89d7g2y683dt7ywqucixukyuqlsac',
        'whskdxlqusadb87ed708623dvos7qbwdxwUKXVAS',
        'asiiiiiii12qwdbqw7d12dbpqwdnqpwd'        
      ],
      createdAt: '25 Feb 2020'
    },
    {
      _id: 'gy167e1yf2d',
      url: 'http://kompas.com',
      keyPoint: [
        'dasytuii578989muanusdybxsasd',
        'dqudw7bod8oastfyguhijoiqpuwoydtqwd9bd',
        'qw89d7g2y683dt7ywqucixukyuqlsac',
        'whskdxlqusadb87ed708623dvos7qbwdxwUKXVAS',
        'asiiiiiii12qwdbqw7d12dbpqwdnqpwd'        
      ],
      createdAt: '25 Feb 2020'
    },
    {
      _id: 'gy167e1yf2d',
      url: 'http://kompas.com',
      keyPoint: [
        'dasytuii578989muanusdybxsasd',
        'dqudw7bod8oastfyguhijoiqpuwoydtqwd9bd',
        'qw89d7g2y683dt7ywqucixukyuqlsac',
        'whskdxlqusadb87ed708623dvos7qbwdxwUKXVAS',
        'asiiiiiii12qwdbqw7d12dbpqwdnqpwd'        
      ],
      createdAt: '25 Feb 2020'
    },
    {
      _id: 'gy167e1yf2d',
      url: 'http://kompas.com',
      keyPoint: [
        'dasytuii578989muanusdybxsasd',
        'dqudw7bod8oastfyguhijoiqpuwoydtqwd9bd',
        'qw89d7g2y683dt7ywqucixukyuqlsac',
        'whskdxlqusadb87ed708623dvos7qbwdxwUKXVAS',
        'asiiiiiii12qwdbqw7d12dbpqwdnqpwd'        
      ],
      createdAt: '25 Feb 2020'
    }
  ])

  return (
    <>
      <HistoryList articles={localArticles} />      
    </>
  )

}

