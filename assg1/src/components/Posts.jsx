import React from 'react'

const PostTable = (props) => {
  return (
    <div>   <table className="table table-striped table-hover">
    <thead>
      <tr>
        <td>UserId</td>
        <td>Id</td>
        <td>Title</td>
        <td>Body</td>
      </tr>
    </thead>
    <tbody>
      {props.map((value) => {
        return (
          <tr>
            <td>{value.userId}</td>
            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.body}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
  )
}

function postList(props)
{
    return  <div>
      {props.map((val)=>{
          return(
            <ul>Post Detail
            <li>UserId: {val.userId}</li>
            <li>Id: {val.id}</li>
            <li>Title: {val.title}</li>
            <li>Body: {val.body}</li></ul>
          )
        })}
  
    </div>
}

const Posts=(props)=>{
    return (
        <div>
            <h1>Table Format</h1>
            {PostTable(props.posts)}
            <hr></hr>
            <h1>List Format</h1>
            {postList(props.posts)}
        </div>
    )


}

export default Posts;