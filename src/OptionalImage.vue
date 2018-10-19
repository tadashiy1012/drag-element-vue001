<template>
    <div>
        <img :src="image" :alt="uid" />
        <div>{{uid}}</div>
    </div>
</template>
<script>
import noImage from './noimage.jpg';
function getUniqueStr(myStrong){
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
}
export default {
    props: ['src'],
    data: function() {
        return {
            image: this.$props.src === void 0 ? noImage : this.$props.src,
            uid: getUniqueStr()
        };
    }
}
</script>

