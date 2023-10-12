<script>
export default {
  // middleweare pageがレンダリングされる前に実行される
  middleware ({ redirect }) {
    return redirect('/')
  }
}
</script>
