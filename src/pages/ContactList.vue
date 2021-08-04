<template>
    <div>
        <Contacts :allContacts="allContacts" />
    </div>
</template>
<script>
import Contacts from '../components/Contacts'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "ContactList",
//   props: ["contacts"],
  components: {
      Contacts
  },
  methods: {
    ...mapActions(['fetchContacts'])
  },
  computed: mapGetters(['allContacts']),
  created() {
    this.fetchContacts()
  },
}
</script>