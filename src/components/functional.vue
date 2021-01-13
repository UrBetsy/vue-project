<script>
import Vue from 'vue';
export default {
    name: 'functional',
    props: {
    },
    render () {
        return this.$scopedSlots.default({
            items: 3,
        });
    },
};
</script>

<style scoped></style>
