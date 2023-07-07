import React from "react";

const About = () =>{
    return (
        <div className="bg-light">
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" height="20" className="img.fluid" /></div>

                    <div className="col-lg-6 p-5">
                        <h1 className="display-4">About Us</h1>
                        <p className="lead mb-0">Hi, <br/> Pada halaman ini, terdapat beberapa informasi penting dibalik pembuatan website ini. Adapun kasus yang sering dijumpai dalam kehidupan sehari-hari ialah pengisian identitas user yang dilakukan secara manual di kertas. Tentu hal tersebut sangat memakan tempat dan memicu terjadinya pemanasan global akibat penggunaan kertas secara berlebihan. Disisi lain, pengisian data yang disimpan dalam suatu file sering kali hilang atau tercecer. Hal tersebut dapat menyulitkan pihak pengelola dalam melakukan update terhadap data yang tersimpan. </p>
                        <br></br>
                        <p className="lead mb-0">Oleh karena itu, muncullah website ini untuk mengatasi masalah tersebut. Website perpustakaan ini  memiliki berbagai fitur seperti registrasi, penambahan data, pengeditan data dll. Dengan adanya fitur tersebut pihak pengelola sudah bisa memanage data yang ada. Data tersebut juga akan tersimpan pada suatu database sehingga data tersebut dapat dipergunakan kembali kedepannya untuk keperluan tertentu. </p>
                        <br></br>
                        <p className="lead mb-0">Tujuan pembuatan website ini adalah untuk membantu pihak pengelola perpustakaan dalam mengelola data pengunjung yang datang ke perpustakaan ini. </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About;
