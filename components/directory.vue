<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-center" width="30">
                    N°
                </th>
                <th>
                    Institución
                </th>
                <th>
                    Cargo
                </th>
                <th>
                    Nombre Completo
                </th>
                <th class="text-center" width="90">
                    Telefono
                </th>
                <th class="text-left" width="200">
                    Dirección
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in data.data" :key="row.name">
                <td class="center" width="30">
                    {{ pad(index + 1, 2) }}
                </td>
                <td>
                    <div class="img">
                        <img width="100%" loading="lazy" onerror="this.style.display='none'" :src="`${base()}/thumb/160/foto/${row.company?.id}.jpg`" />
                    </div>
                    <p>{{ row.companyName }}</p>
                </td>
                <td>
                    <i>{{ row.position }}</i>
                </td>
                <td>
                    {{ row.people.names }} {{ row.people.firstSurname }} {{ row.people.lastSurname }}
                </td>
                <td>{{ row.phone }}</td>
                <td>{{ row.address }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup lang="ts">
function pad(number: number, length: number) {
    return String(number).padStart(length, '0');
}
function base() {
    return process.env.BASE_API;
}
const { data, error, refresh }: any = await useAsyncData('directory', async () => {
    return $fetch(process.env.BASE_API + '/api/obresec/directory/0/0');
})
console.log(data);
const yolo = resolveComponent('directory')
</script>
<style>
div.img {
    float: left;
    position: relative;
    max-width: 100%;
}

.img {
    min-height: 80px;
    width: 80px;
}

.v-table th,
th {
    text-align: center !important;
    background-color: #0f62ac;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #104575;
    font-weight: bold !important;
    vertical-align: middle;
}

.v-table {
    border: 1px solid gray;
}

h3.title {
    padding-top: 4px !important;
    color: white !important;
    background: gray;
    border: 1px solid gray;
    padding-top: 5px;
    padding-right: 24px;
    text-transform: uppercase;
    margin-bottom: 20px !important;
    max-width: 500px;
    margin: auto;
}

.v-table tr:nth-child(even) {
    background-color: #f2f2f2;
}

.v-table tr:hover {
    cursor: pointer;
    background-color: #e6eef5;
}

.v-table {
    border: 1px solid gray;
}

.v-table th {
    text-align: center;
    padding: 5px;
}

.v-table td:nth-child(0) {
    width: 30px;
    text-align: center;
}

.img {
    min-height: 80px;
    width: 80px;
}

.img+p {
    padding-left: 5px;
    display: inline-block;
    width: calc(100% - 80px);
    text-align: initial;
}

@media(max-width:600px) {

    .v-table td,
    .v-table th {
        display: block;
    }
}
</style>