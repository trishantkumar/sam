<template>
    <div class="main-container" v-if="isListVisible == true">
        <button @click="backButton" class="back-button">Back to contact list</button>
        <div class="data-container">
            <div class="cover-image-container">
                <img class="cover-image" :src='clickedUserData.avatar' alt="cover image" />
            </div>
            <div class="user-image-container">
                <img class="user-image" :src='clickedUserData.avatar' alt="user image" />
            </div>
            <div class="user-data">
                <div class="user-name">
                    {{clickedUserData.first_name}} {{clickedUserData.last_name}}
                </div>
                <div class="user-email">
                    {{clickedUserData.email}}
                </div>
                <div class="user-buttons">
                    <div class="user-location">
                        India
                    </div>
                    <span class="pipe">
                    |
                    </span>
                    <div class="user-email-button">
                        Send Email
                    </div>
                </div>
                <div class="user-follow">
                    <div class="user-followers">

                    </div>
                    <div class="user-following">

                    </div>
                </div>
                <div class="user-follow-button">
                    <button type="button" class="">Follow</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default({
    props: {
        clickedUserData: {
            type: Object
        },
        isListVisible: {
            type: Boolean
        }
    },
    methods: {
        backButton() {
            const value = false
            this.$root.$emit('backClicked', value);
        }
    }
})
</script>
<style>
.main-container{
    width: 625px;
    margin: auto;
    background-color: #E7EBEC;
    border: 1px solid #E7EBEC;
    border-radius: 10px;
}
.data-container {
    width: 400px;
    margin: 20px auto;
    background-color: white;
    border-radius: 10px;
}
.cover-image-container {
    height: 250px;
}
.cover-image {
    width: 100%;
    height: 150px;
        border-radius: 10px;
}
.user-image-container {
    position: absolute;
    left: 45%;
    top: 50%;
}
.user-image {
    border-radius: 50%;
}
.user-name {
    font-size: 24px;
    font-weight: 600;
    margin: 10px;
}
.user-email {
    font-size: 20px;
    font-weight: 500;
    margin: 10px;
}
.user-buttons {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    margin: 10px;
}
.user-location {
    margin: 10px;
}
.user-email-button {
    margin: 10px;
}
.user-follow-button > button  {
    width: 100%;
    background: green;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    border-radius: 10px;
    border: none;
}
.pipe {
    margin: 10px;
}
.back-button {
    cursor: pointer;
    width: 100%;
    background: red;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    border-radius: 10px;
    border: none;
}
</style>
