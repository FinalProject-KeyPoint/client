import React, { useState, useEffect } from 'react'
import '../style/dashboard.css'
import { Empty, Button, Popconfirm, message } from 'antd';
import moment from 'moment'
import { useSelector } from 'react-redux'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import image from '../assets/notifications/select.png'

export default function HistoryList(props) {

  const articles = useSelector(state => state.articles.articles)
  const [article, setArticle] = useState({})

  useEffect(() => {
    setArticle({})
  }, [articles])

  const changeDetail = obj => {
    setArticle(obj)
  }

  const redirect = url => {
    window.open(url, '_blank')
  }

  const onDelete = (id) => {
    props.deleteArticle(id)
    setArticle({})
  }

  const getTitle = (title) => {
    return (
      title.length > 100
      ? title.substring(0, 100).concat('...')
      : title
    )
  }

  const displayDetail = () => {
    return (
      article._id
      ? <div style={{ position: 'sticky', top: '1%', maxHeight: '90vh', width: '100%' }}><div className="articleDetail pb-3" style={{ position: 'sticky', top: '1%', maxHeight: '90vh', overflow: 'auto', width: '90%' }}>
          <Button onClick={() => redirect(article.url)} type="link" style={{ margin: 'auto', whiteSpace: 'normal', height: '10%' }} className="my-3" >
            {article.title}
          </Button>
          <div style={{maxHeight: '100%', overflow: 'auto'}} >
          <ul style={{ width: '90%', margin: 'auto', height: '90%' }}>{article.keyPoint.map(point => {
            return <li style={{ fontSize: 14, margin: '2 0' }}>{point}</li>
          })}</ul>
          </div>
          </div>
          <Popconfirm
              title="Are you sure delete this article?"
              onConfirm={() => onDelete(article._id)}
              okText="Yes"
              cancelText="No"
              style={{position: 'relative', width: '90%'}}
            >
            <Button style={{ width: '90%', position:'absolute', backgroundColor: 'coral', color: 'snow', margin: 'auto' }} block>Delete</Button>
          </Popconfirm>
        </div>
      : <div style={{ margin: 'auto', width: '400px', position: 'sticky', top: '20%' }}>
          <img src={image} style={{ width: '100%', height: 'auto' }}/>
          <p style={{ fontSize: 18, textAlign: 'center', marginTop: 5 }}>Please select article to display</p>
        </div>
    )
  }

  const renderList = (() => {
    if (articles.length) {
      return props.articles.map(article => {
        return <VerticalTimelineElement
                  contentStyle={{ marginLeft: 20, background: 'lightsalmon', color: 'darkslategray', width: 200 }}
                  contentArrowStyle={{ borderRight: '7px solid lightsalmon' }}
                  date={moment(article.createdAt).format('LT')}
                  iconStyle={{ background: 'lightsalmon', color: 'darkslategray' }}
                  article={article} key={article._id}
                  iconOnClick={() => changeDetail(article)}
                >
                  <p
                    onClick={() => changeDetail(article)}
                    style={{ cursor: 'pointer' }}
                  >
                    {getTitle(article.title)}
                  </p>
                </VerticalTimelineElement>
      })
    } else {
      return <Empty imageStyle={{ height: 250, width: 250 }} description={false} style={{ margin: 'auto' }} />
    }
  })

  return (
    <div className="historyList">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ margin: 'auto', width: '60%' }}>
          <p style={{ fontWeight: 600, fontSize: '1rem', textAlign: 'center' }}>
            {moment(props.date).format("MMM Do YYYY")}
          </p>
          <VerticalTimeline style={{ }}>
            {renderList()}
          </VerticalTimeline>
        </div>
          <div style={{ width: '40%' }}>
            {displayDetail()}
          </div>
      </div>
    </div>
  )
}