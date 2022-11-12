import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function loginrightpane() {
  return (
    <div className="login-pane">
    <Outlet />
    </div>
  )
}

export default loginrightpane