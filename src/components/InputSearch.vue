<script>
    export default {
        props: {
            modelValue: {type: String, default: ""},
        },
        emits: ["submmit", "update:modelValue"],
        methods: {
            updateModelValue(e) {
                this.$emits("update:modelValue", e.target.value);
            },
            submit() {
                this.$emits("submit");
            },
        },
    };
</script>

<template>
    <div class="input-group">
        <input 
            type="text"
            class="form-control"
            placeholder="Nhập chuyến du lịch bạn muốn"
            :value="modelValue"
            @input="updateModelValue"
            @keyup.enter="submit"
        />
        <div class="input-group-expand">
            <button class="btn btn-outline-secondary"
                    type="button"
                    @click="submit">
                <i class="fas fa-search"></i>Tìm Kiếm
            </button>
        </div>
    </div>
</template>