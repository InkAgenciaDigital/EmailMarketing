<template>
<div class="container">
    <div class="col-md-8">
       <form>
        <h1>Empresa</h1>
        <br>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="empresa">Empresa</label>
            <input type="text" class="form-control" id="empresa">
            </div>
            <div class="form-group col-md-6">
                <label for="tipo">Tipo empresa</label>
                        <select id="tipo" class="form-control">
                            <option selected>Tipo empresa</option>
                            
                        </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="proyecto">Nombre del proyecto</label>
                <input type="text" class="form-control" id="proyecto">
            </div>
        </div>
        <br><br>
        <h1>Persona</h1>
        <br>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre">
            </div>
            <div class="form-group col-md-6">
                <label for="apellido">Apellido</label>
                <input type="text" class="form-control" id="apellido">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="edad">Edad</label>
                <input type="number" class="form-control" id="edad">
            </div>
            <div class="form-group col-md-6">
                <label for="sexo">Sexo</label>
                        <select id="sexo" class="form-control">
                            <option selected>Elige uno</option>
                            <option>Femenino</option>
                            <option>Masculino</option>
                            <option>Otro</option>
                        </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="escolaridad">Escolaridad</label>
                <input type="text" class="form-control" id="escolaridad">
            </div>
            <div class="form-group col-md-6">
                <label for="cargo">Cargo</label>
                <input type="text" class="form-control" id="cargo">
            </div>
        </div>
        <br>
        <button type="submit" class="btn2 btn-success">Guardar</button>
    </form>  
    </div>
    
</div>
</template>