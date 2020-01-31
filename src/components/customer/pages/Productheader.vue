<template>
    <div>
            <div class="header">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item header-carousel-item bg-cover1 active"
                        style="background-image: url(../../../../static/img/cap.jpg) ; background-size: 100% cover">
                        <div class="carousel-caption d-none d-md-block p-5 title-bg">
                            <h2>BOOGNATION復刻衣</h2>
                            <p>經典重現，現正熱賣中，特價三件1800元</p>
                        </div>
                    </div>
                    <div class="carousel-item header-carousel-item bg-cover1"
                        style="background-image: url(../../../../static/img/kidcamp.jpg) ; background-size: 100% cover">
                        <div class="carousel-caption d-none d-md-block p-5 title-bg">
                            <h2>屬於小朋友的舞蹈暑假</h2>
                            <p>不知道暑假要讓孩子學習什麼才藝嗎？就來BOOGSTUDIO學習舞蹈吧！</p>
                        </div>
                    </div>
                    <div class="carousel-item header-carousel-item bg-cover1"
                        style="background-image: url(../../../../static/img/winter.jpg) ; background-size: 100% cover">
                        <div class="carousel-caption d-none d-md-block p-5 title-bg">
                            <h2>秋冬新款，即將上市</h2>
                            <p>潮流尖端BOOGNATION，即將席捲整個秋冬</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
        
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
        
            </div>
    </div>
    </div>
</template>


<style>
.header{
    padding-top: 750px;
}

.header .title-bg{
    background: rgba(0,0,0,.5);
}

.header .bg-cover1{
    background-size: 100% cover;
    min-height: 700px;
    padding-top: 1000px;
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
</style>