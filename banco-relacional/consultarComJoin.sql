-- no plugin este comando não retorna o nome dos estados, em outros lugares roda
select * from estados e, cidades c where e.id = c.estado_id


select 
    e.nome as Estado, 
    c.nome as Cidade,
    regiao as Região
from estados e, cidades c
where e.id = c.estado_id

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
inner join cidades c on e.id = c.estado_id