<template>
    <div class="container">
    <div class="row">
        <div class="col">
            <br><br><br> 
            <br><br><br><br>
            <form>
                <div class="form-group">
                    <label for="InputEmail"  >Email</label>
                    <input type="email" class="form-control" id="email" >
                </div>
                <div class="form-group">
                    <label for="InputPassword">Password</label>
                    <input type="password" class="form-control" id="Password">
                </div>
                
                <button type="submit" class=" btn btn-success"  >Entrar</button>
                <br> <br>   

                <a class="a" href="https://www.inkdigital.co">¿Olvidaste tu contaseña?</a>       
                
            </form>
        </div>
        


    </div>
    </div>
</template>

<script>
export default {
    name:'Login'
}
</script>