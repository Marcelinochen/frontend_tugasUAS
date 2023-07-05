import React from "react";

var datetime = () => {
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();

    var dt = showdate.toDateString();
    var displaytime = showdate.getHours()+'/  Menit : '+showdate.getMinutes()+'/ Detik : '+showdate.getSeconds();

    return(
        <div>
            Tanggal Hari Ini : 
            <input type="text" value={ displaytodaysdate} readOnly="true"/>

            <center>
            {dt} / Jam : {displaytime}
            </center>
        </div>
    );
    
}

export default datetime;