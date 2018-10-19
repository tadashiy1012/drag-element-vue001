<template>
    <div>
        <section>
            <table>
                <tr>
                    <td><drp><drg><opt-img /></drg></drp></td>
                    <td><drp><drg><opt-img /></drg></drp></td>
                    <td><drp><drg><opt-img /></drg></drp></td>
                </tr>
                <tr>
                    <td><drp><drg><opt-img /></drg></drp></td>
                    <td><drp><drg><opt-img /></drg></drp></td>
                    <td><drp><drg><opt-img /></drg></drp></td>
                </tr>
                <tr>
                    <td><drp><drg><opt-img /></drg></drp></td>
                    <td><drp><drg><opt-img /></drg></drp></td>
                    <td><drp><drg><opt-img /></drg></drp></td>
                </tr>
            </table>
        </section>
        
    </div>
</template>
<style scoped>
table {
    width: 500px;
    border: solid 1px black;
}
table td {
    text-align: center;
    border: solid 1px black;
    height: 80px;
}
</style>
<script>
import Draggable from './Draggable.vue';
import Droppable from './Droppable.vue';
import OptionalImage from './OptionalImage.vue';
import image from './noimage.jpg';
export default {
    components: {
        drg: Draggable,
        drp: Droppable,
        optImg: OptionalImage
    },
    data: function() {
        return {
            image: image
        };
    }
}
</script>
