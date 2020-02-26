// import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import loader from '../assets/notifications/loader.gif';

const MySwal = withReactContent(Swal)

export default function Swala(title, message, icon) {

  MySwal.fire({
    title: title,
    footer: 'Copyright 2020',
    onOpen: () => {
      MySwal.clickConfirm()
    }
  })
  .then(() => {
    return MySwal.fire({
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: 2000
    })
  })

}