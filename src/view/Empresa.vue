<template>
<div class="container">
    <div class="col-md-8">
       <form>
            <br><br>
            <h1>Empresa</h1>
            <br>
            <div class="form-row">
                <div class="form-group col-md-10">
                <label for="empresa">Empresa</label>
                <input type="text" class="form-control" id="empresa">
                </div>
               
            </div>
            <div class="form-row">
                <div class="form-group col-md-10">
                    <label for="tipo">Tipo empresa</label>
                            <select id="tipo" class="form-control">
                                <option selected>Tipo empresa</option>  
                            </select>
                </div>
            </div>
            
            <br>
            <button type="submit" class="btn btn-dark" style="background-color: #344675;">Guardar</button>
            <br><br><br>
       </form>  
    </div>
    
    
</div>
</template>
<style>
.background{
        position: absolute;
        z-index: 1;
        width: 98%;
        height: 169%;
        padding-top: 0%;
        padding-left: 0%;
        padding-right: 0%;
    }
 
    
</style>