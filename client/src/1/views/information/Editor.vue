<template>
	<div class="deit">
		<div class="crumbs">
			<div class="cantainer">
				<quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
				<el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import { quillEditor } from 'vue-quill-editor'
	import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
	export default {
		name: 'edit',
		data() {
			return {
				content: '',
				editorOption: {
					placeholder: '请编辑相关内容'
				}
			}
		},
		components: {
			quillEditor
		},
		methods: {
			onEditorChange({
				editor,
				html,
				text
			}) {
				this.content = text;
			},
			submit() {
				console.log(this.content);
				if (this.content === '') {
					this.$message.warning('内容不能为空！');
				} else {
					/* this.$axios.post("/apis/edit.json", this.content).then(res => {
						console.log(res)
					}) */
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.cantainer {
		padding: 30px;
		background: #ffffff;
		border-radius: 5px;
		margin-top: 20px;
	}

	.quill-editor {
		height: 500px;
	}

	.editor-btn {
		margin-top: 50px;
	}
</style>
