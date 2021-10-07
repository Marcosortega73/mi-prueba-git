export const MenuItemsTienda = [

{
    'titulo':'Ofertas',
    'patch':'/ofertas',
    'className':'dropdown-link'
},
{
    'titulo':'Plantas Ornamentales',
    'patch':'/plantas-ornamentales',
    'className':'dropdown-link',
    'subMenu':[
        {
            'titulo':'Flora Interiores',
            'patch':'/flora-interiores',
            'className':'dropdown-link',
        },
        {
            'titulo':'Flora Exteriores',
            'patch':'/flora-exteriores',
            'className':'dropdown-link',
            'subMenu':[
                {
                    'titulo':'Plantas Florales',
                    'patch':'/plantas-florales',
                    'className':'dropdown-link'
                },
                {
                    'titulo':'Plantas Frutales',
                    'patch':'/plantas-frutales',
                    'className':'dropdown-link'
                },
                {
                    'titulo':'Plantas de Hojas',
                    'patch':'/plantas-hojas',
                    'className':'dropdown-link'
                }
               
            ]
        },
        {
            'titulo':'Cactus y Suculentas',
            'patch':'/cactus-suculentas',
            'className':'dropdown-link'
        }
    ]
},
{
    'titulo':'Herramientas',
    'patch':'/ofertas',
    'className':'dropdown-link',
    'subMenu':[
        {
            'titulo':'Riego',
            'patch':'/riego',
            'className':'dropdown-link'
        },
        {
            'titulo':'Siembra',
            'patch':'/siembra',
            'className':'dropdown-link'
        },
        {
            'titulo':'Mantenimiento',
            'patch':'/mantenimento',
            'className':'dropdown-link'
        }
       
    ]
},
{
    'titulo':'Cultivos',
    'patch':'/ofertas',
    'className':'dropdown-link',
    'subMenu':[
        {
            'titulo':'Temporada Otoño-Invierno',
            'patch':'/temporada-invierno',
            'className':'dropdown-link'
        },
        {
            'titulo':'Temporada Primavera-Verano',
            'patch':'/temporada-verano',
            'className':'dropdown-link'
        },
        {
            'titulo':'Temporada Anual',
            'patch':'/temporada-anual',
            'className':'dropdown-link'
        }
       
    ]
}

]
export const MenuItemsConsejos = [

    {
        'titulo':'Ornamentales',
        'patch':'/ornamentales',
        'className':'dropdown-link',
        'subMenu':[
            {
                'titulo':'Interiores',
                'patch':'/consejos-interiores',
                'className':'dropdown-link'
            },
            {
                'titulo':'Exteriores',
                'patch':'/consejos-exteriores',
                'className':'dropdown-link'
            },
            {
                'titulo':'Otros',
                'patch':'/consejos-otros',
                'className':'dropdown-link'
            }
           
        ]
    },
    {
        'titulo':'Cuidados',
        'patch':'/cuidados',
        'className':'dropdown-link',
        'subMenu':[
            {
                'titulo':'Consejos Flora Interiores',
                'patch':'/consejos-flora-interiores',
                'className':'dropdown-link'
            },
            {
                'titulo':'Flora Exteriores',
                'patch':'/consejos-flora-exteriores',
                'className':'dropdown-link'
            },
            {
                'titulo':'Cactus y Suculentas',
                'patch':'/consejos-cactus-suculentas',
                'className':'dropdown-link'
            }
           
        ]
    },
    {
        'titulo':'Cultivos',
        'patch':'/cultivos',
        'className':'dropdown-link'
    },
    {
        'titulo':'Consejos Diarios',
        'patch':'/consejos-diarios',
        'className':'dropdown-link'
    }
    
    ]
    
