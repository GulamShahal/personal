$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbyTByw3ZdJ2dP_eR20ZiZH9OEs5x2xe9zADUiIVYErg9SOdPQAeb2ZV_yx24maJAJ96/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})