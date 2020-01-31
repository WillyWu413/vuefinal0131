<template>
    <div>
        <navbar/>
        <div class="banner" style="padding-top:1500px">
        </div>
        <div class="jumbotron jumbotron-fluid jumbotron-bg banner" >
            <div class="row">
                <div class="col-md-5"></div>
                <div class="col-md-2 d-flex justify-content-center">
                </div>
                <div class="col-md-5">
                </div>
            </div>
        </div>
<!-- banner end -->
<!-- content -->
<div class="content">
    <div class="jumbotron jumbotron-fluid jumbotron-bg-1  content square mb-0">
        <div class="container">
            <div class="logo rounded">
                <h1 class="display-4 text-white">專業舞蹈團隊</h1>
                <h4 class="lead text-white" style="line-height: 30px">
                    為您鋪好成為舞者的路，持之以恆，人人皆能成為舞台上的巨星
                    <br>
                    讓曾猶豫跳舞的您，勇敢踏出第一步
                </h4>
            </div>
        </div>
    </div>
</div>

        <!-- history -->
<div class="history_title">
<nav class="navbar navbar-info bg-info text-white mb-0">
    <div class="container-fluid justify-content-center">
    <span class="py-3 mb-0 h1" style="font-size: 25px">專業的舞台經歷 Profession</span>
    </div>
</nav>
</div>
<div class="history" id="history">
<div class="jumbtron jumbotron-fluid jumbotron-bg-2 ">
    <div class="container">
    <div class="row">
        <div class="col-md-6">
        <div class="produce ml-5 mt-4">
        <h1>Boog Nation團隊</h1>
        <h4>擔任各大學及工作室成果發表會之表演嘉賓<br>經常受邀至國內外商演編排及演出</h4>
        <h2>表演經歷：</h2>
        <ul>
            <li>2019 服飾潮牌StayReal企業員工舞蹈成果展</li>
            <li>春吶25週年 李英宏合作表演團隊</li>
            <li>花旗銀行尾牙</li>
            <li>Intel產品發表會</li>
            <li>這就是街舞 田一德團隊</li>
            <li>草草藝術節嘉賓</li>
            <li>綠色和平協會 快閃活動</li>
        </ul>
        </div>
    </div>
        <div class="col-md-6">
            <iframe class="video rounded" width="90%" height="330vw" src="https://www.youtube.com/embed/lw_J8_Ium6E" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    </div>
</div>
</div>

<div class="kidscamp">
<div class="jumnbtron jumbtron-fluid  square2">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8 jumbotron-bg-3"></div>
            <div class="col-md-4 title-1 text-white">
                <h1 >BOOG STUDIO</h1>
                <h2 class="h1">兒童街舞培養班</h2>
                <p class="py-3">學童藉由舞蹈認識身心，在舞蹈中成長，培養自身責任感<br>
                    歡迎3~12歲的小朋友來參與，就算是零基礎的小朋友也歡迎喔！<br>
                    迎蒞臨工作室，將有專人為您服務！   
                </p>
                <small class="">地址：台北市松山區延吉街ＸＸ街ＸＸ號</small>
            </div>
        </div>
    </div>
    </div>
</div>
<footerAll/>
    </div>
</template>

<script>
import navbar from './pages/navbar';
import footerAll from './pages/footerAll';
import product from './pages/product';

export default {
    components:{
        navbar,
        footerAll,
        product,
    }
}
</script>

<style lang="scss" scoped>

body{
    font-family: 'Permanent Marker', cursive;
    font-family: STHupo;
    font-size: 16px;
    background: #000;
    margin: 0 auto;
}

// label{
//     color: #fff;
// }

/* // index css // */
.bg-cover1{
    background-size: 100% auto;
    min-height: 700px;
}

.bg-cover{
    background-size: cover;
    background-position: center center;
    min-height: 200px;
}


.banner{
    margin-bottom: 0;
}

.reversation a{
    text-decoration: none;
    color: #fff;
}


/* // banner */
.jumbotron-bg{
    background: url(../../../static/img/banner.jpg);
    background-size: cover;
    background-position: center center;
    min-height: 350px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
}

/* // content */
.content{
    margin-top: -95px;
}

.bg-dark{
    color: #192a56;
    background-color: #192a56;
}
    
.jumbotron-bg-1{
    background: url(../../../static/img/teacher.jpg);
    background-size: cover;
    background-position: center center;
    min-height: 600px;
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 100%);
}


.logo{
    text-align: center;
    border: 1px solid transparent;
    background-color: rgba(0,0,0,.4);
    max-width: 660px;
    padding: 40px;
    margin:0 auto;
    margin-top: 170px;
}

.logo:hover{
    transform: scale(0.96);
    transition: (0.3s);
}
.reversation{
    margin-top: 380px;
    width: 300px;
    background: orange;
    outline: none;
    color: #fff;
    font-size: 20px;
}

.reversation:hover{
    transform: scale(0.9);
    transition: 0.4s;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
}

/* // 詳細經歷介紹 */
.jumbotron-bg-2{
    background: url(../../../static/img/abigail-keenan-HfBZFnHgVKo-unsplash.jpg);
    background-size: cover;
    background-position: center center;
    min-height: 400px;
}
.jumbotron-bg-2 .video{
    margin-top: 40px;
}

/* // 兒童街舞介紹 */
.square2{
    position: relative;
    background-color: orangered;
    min-height: 40vw;
}
.square2 .title-1{
    margin-top: 10%;
    margin-left: 65%;
    text-align: center;
}
.jumbotron-bg-3::after{
    content: "";
    background: url(../../../static/img/lesson1.jpg) no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    min-height: 40vw;
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(0 0, 100% 0%, 85% 100%, 0 100%);
}

.footer ul{
    list-style-type: none;
    list-style-position: outside;
}
.footer a{
    text-decoration: none;
    color: #fff;
}

.footer a:hover{
    text-decoration: none;
    color: orangered;
} 


.header .title-bg{
    background: rgba(0,0,0,.5);
}

.bg-none{
    background-color: rgba(0,0,0,.5);
    
}

.card:hover{
    transform: scale(1.1);
    transition: 0.3s;
}

.price{
    background-color:  rgba(255,255,255,.1);
}

.bg-company-darkblue{
        background-color: #1e272e;
} 



</style>

