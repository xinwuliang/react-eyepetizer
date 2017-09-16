import styled from 'styled-components'


const TopScreenDiv = styled.div`
    height: 100%;
    position: relative;
    .menu {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 1;
        button {
            height: 36px;
            margin: 0 8px;
            transition: opacity .6s;
            opacity: .7;
            padding: 0;
            width: 36px;
        }
        .email, .wechat, .weibo {
            background-image: url(//static.kaiyanapp.com/eyepetizer-web/assets/images/sprite_share.bc0f4494.png);
            background-repeat: no-repeat;
        }
        .wechat {
            background-size: 36px;
            background-position: 0 -26px;
        }
        .weibo {
            background-size: 36px;
            background-position: 0 -63px;
        }
        .email {
            background-size: 54px;
            background-position: 0 0;
        }
    }
    .video-wrap {
        position: relative;
        z-index: -100;
        height: 100%;
        width: 100%;
        overflow: hidden;
        .video {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            min-height: 100%;
            min-width: 100%;    
        }
    }


`

export default TopScreenDiv