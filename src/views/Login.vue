<template>
    <div>
        <table border="1" class="table">
            <tr>
                <td colspan="4">
                    <input type="password" id="display" placeholder="Your Code Honey ❤︎" v-model="password">
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <input type="text" v-model="momOrDaddy" >
                </td>
            </tr>
            <tr>
                <td @click="add('AC')" colspan="3">AC</td>
                <td @click="add('/')">/</td>
            </tr>
            <tr>
                <td @click="add('7')">7</td>
                <td @click="add('8')">8</td>
                <td @click="add('9')">9</td>
                <td @click="add('*')">*</td>
            </tr>
            <tr>
                <td @click="add('4')">4</td>
                <td @click="add('5')">5</td>
                <td @click="add('6')">6</td>
                <td @click="add('-')">-</td>
            </tr>
            <tr>
                <td @click="add('1')">1</td>
                <td @click="add('2')">2</td>
                <td @click="add('3')">3</td>
                <td @click="add('+')">+</td>
            </tr>
            <tr>
                <td @click="add('4')" colspan="2">0</td>
                <td @click="add('.')">.</td>
                <td @click="add('=')">=</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import Constant from '../Constant';

    export default {
        name: "Login",
        data () {
            return {
                password: '',
                momOrDaddy: ''
            }
        },
        methods: {
            ...mapMutations({
                setParent : Constant.SET_PARENT,
            }),
            add(char) {
                this.password = this.password.concat(char);

                //console.log(this.password);

                if(char == 'AC'){
                    this.password = '';
                    this.momOrDaddy = '';
                }

                if(this.password.length == 2 && this.password == '23' || this.password == '11' ){
                    if(this.password == '23'){
                        this.momOrDaddy = 'Mommy I love you ❤︎';
                        this.setParent({who: 'Mommy'});
                    }else if(this.password == '11'){
                        this.momOrDaddy = 'Daddy I love you ❤';
                        this.setParent({who: 'Daddy'});
                    }

                    //set Timer
                    setTimeout(this.timer, 1000);
                }
            },
            timer() {
                this.$router.push('/list')

            }
        }
    }
</script>

<style scoped>
    table {
        border-collapse: collapse;
    }

    input {
        text-align: right;
        border: none;
    }
    input:focus {
        outline: none;
    }

</style>
