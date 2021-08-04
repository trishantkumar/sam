<template>
    <div :class="isListVisible == false ? 'container' : ''">
        <div class="upper-row" v-if="isListVisible == false">
          <span>
            All
          </span>
        </div>
        <div>
          <table class="contact-table" v-if="isListVisible == false">
              <tr class="contact-row" v-for="(contact, index) in allContacts" :key="index" @click="navigateToContact(contact)">
                    <div class="image-container">
                        <img class="contact-image" :src='contact.avatar' alt="contact image" />
                    </div>
                    <div class="contact-name">
                        {{contact.first_name}} {{contact.last_name}}
                    </div>
              </tr>
          </table>
        </div>
        <UserContact :clickedUserData="clickedUserData" :isListVisible="isListVisible" v-if="isListVisible == true" />
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import UserContact from './UserContact'
export default ({
    data() {
      return{
        isListVisible: false,
        userData: []
      }
    },
    components: {
        UserContact
    },
    props: {
        allContacts: {
          type: Array
        }
    },
    computed: mapGetters(['userContact']),
    methods: {
        ...mapActions(['getUserData']),
        async navigateToContact(contact) {
            await this.getUserData(contact.id);
            this.isListVisible = true;
            this.clickedUserData = this.userContact.data
        }
    },
    mounted() {
        this.$root.$on('backClicked', data => {
            this.isListVisible = data;
        })
    }
})
</script>
<style>
.container {
    width: 625px;
    margin: auto;
    background-color: #E7EBEC;
    border: 1px solid #E7EBEC;
    border-radius: 10px;
    background-color: #18A5EE;
}
.contact-table {
    width: -webkit-fill-available;
    max-width: 400px;
    margin: auto;
    background-color: #87DFF2;
}
.contact-row {
    cursor: pointer;
    background: white;
    display: flex;
    padding: 10px;
    margin: 8px;
    border-radius: 10px;
}
.contact-image {
    width: 50px;
    border-radius: 50%;
}
.contact-name {
    position: relative;
    top: 12px;
    left: 2rem;
    font-size: 20px;
    font-weight: 500;
}
.image-container {
    display: flex;
}
.upper-row {
    margin: 10px;
}
.upper-row > span {
    left: -187px;
    position: relative;
    color: white;
    font-size: 20px;
    font-weight: 600;
}
</style>
