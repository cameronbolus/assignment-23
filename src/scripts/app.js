import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';


const AllLegislatorsProps = React.createClass({

  render: function(){

    return(
      <div className="container-div">

        {this.props.legislatorList.map(function(singleCong, i){
          return   <LegislatorDetails listOfLegislators={singleCong} index={i} key={i}/>
        })}
      </div>
    )
  }

})

const LegislatorDetails = React.createClass({

    render: function(){

    var legislatorObj = this.props.listOfLegislators
      console.log(this.props.listOfLegislators.first_name)
      return(
        <div className="legislator">
          <h3>{legislatorObj.first_name} {legislatorObj.last_name}</h3>
          <h4>{legislatorObj.title} -- {legislatorObj.party} - {legislatorObj.state}</h4>
          <ul>
            <li>email: {legislatorObj.oc_email}</li>
            <li>website: {legislatorObj.website}</li>
            <li>facebook: {legislatorObj.facebook_id}</li>
            <li>twitter: {legislatorObj.twitter_id}</li>
          </ul>
          <p>Term End {legislatorObj.term_end}</p>

        </div>
      )
    }

})

$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
  ReactDOM.render(
  <AllLegislatorsProps legislatorList={serverRes.results}/> ,
   document.querySelector('#app-container'));
})
