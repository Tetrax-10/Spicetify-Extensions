const GraphQL = {
    Definitions: {
        queryArtistOverview: {
            kind: "Document",
            definitions: [
                {
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "queryArtistOverview",
                    },
                    variableDefinitions: [
                        {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uri",
                                },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                        },
                        {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "locale",
                                },
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String",
                                },
                            },
                        },
                    ],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "artistUnion",
                                },
                                arguments: [
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "uri",
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "uri",
                                            },
                                        },
                                    },
                                ],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "__typename",
                                            },
                                        },
                                        {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "Artist",
                                                },
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "uri",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "saved",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "sharingInfo",
                                                        },
                                                        arguments: [
                                                            {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "customData",
                                                                },
                                                                value: {
                                                                    kind: "ListValue",
                                                                    values: [
                                                                        {
                                                                            kind: "ObjectValue",
                                                                            fields: [
                                                                                {
                                                                                    kind: "ObjectField",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "key",
                                                                                    },
                                                                                    value: {
                                                                                        kind: "StringValue",
                                                                                        value: "wpi",
                                                                                        block: false,
                                                                                    },
                                                                                },
                                                                                {
                                                                                    kind: "ObjectField",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "value",
                                                                                    },
                                                                                    value: {
                                                                                        kind: "Variable",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "locale",
                                                                                        },
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                            },
                                                        ],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "shareUrl",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "shareId",
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "profile",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "name",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "verified",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "pinnedItem",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "comment",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "type",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "backgroundImage",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "sources",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "url",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "itemV2",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "InlineFragment",
                                                                                            typeCondition: {
                                                                                                kind: "NamedType",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "MerchResponseWrapper",
                                                                                                },
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "data",
                                                                                                        },
                                                                                                        arguments: [
                                                                                                            {
                                                                                                                kind: "Argument",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "utmContent",
                                                                                                                },
                                                                                                                value: {
                                                                                                                    kind: "StringValue",
                                                                                                                    value: "direct",
                                                                                                                    block: false,
                                                                                                                },
                                                                                                            },
                                                                                                            {
                                                                                                                kind: "Argument",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "utmMedium",
                                                                                                                },
                                                                                                                value: {
                                                                                                                    kind: "StringValue",
                                                                                                                    value: "app-artistpick",
                                                                                                                    block: false,
                                                                                                                },
                                                                                                            },
                                                                                                        ],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "InlineFragment",
                                                                                                                    typeCondition: {
                                                                                                                        kind: "NamedType",
                                                                                                                        name: {
                                                                                                                            kind: "Name",
                                                                                                                            value: "Merch",
                                                                                                                        },
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "uri",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "name",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "price",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "url",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "image",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "sources",
                                                                                                                                            },
                                                                                                                                            selectionSet: {
                                                                                                                                                kind: "SelectionSet",
                                                                                                                                                selections: [
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "height",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "width",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "url",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "item",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "InlineFragment",
                                                                                            typeCondition: {
                                                                                                kind: "NamedType",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "ExclusiveMerch",
                                                                                                },
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "uri",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "title",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "subtitle",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "checkoutUrl",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "InlineFragment",
                                                                                            typeCondition: {
                                                                                                kind: "NamedType",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "Artist",
                                                                                                },
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "uri",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "profile",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "name",
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "visuals",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "avatarImage",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "sources",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "url",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "width",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "height",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "InlineFragment",
                                                                                            typeCondition: {
                                                                                                kind: "NamedType",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "Playlist",
                                                                                                },
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "uri",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "name",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "images",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "items",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "sources",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "url",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "width",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "height",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "InlineFragment",
                                                                                            typeCondition: {
                                                                                                kind: "NamedType",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "Album",
                                                                                                },
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "uri",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "name",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "coverArt",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "sources",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "url",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "width",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "height",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "type",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "InlineFragment",
                                                                                            typeCondition: {
                                                                                                kind: "NamedType",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "Concert",
                                                                                                },
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "uri",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "title",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "id",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "date",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "isoString",
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "venue",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "name",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "location",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "name",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "InlineFragment",
                                                                                            typeCondition: {
                                                                                                kind: "NamedType",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "Track",
                                                                                                },
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "uri",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "name",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "albumOfTrack",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "coverArt",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "sources",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "url",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "width",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "height",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "InlineFragment",
                                                                                            typeCondition: {
                                                                                                kind: "NamedType",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "Episode",
                                                                                                },
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "uri",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "name",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "coverArt",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "sources",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "height",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "width",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "url",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "biography",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "type",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "text",
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "externalLinks",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "items",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "FragmentSpread",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "artistExternalLinkItem",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "playlistsV2",
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "offset",
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "0",
                                                                            },
                                                                        },
                                                                        {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "limit",
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "10",
                                                                            },
                                                                        },
                                                                    ],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "totalCount",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "items",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "data",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "__typename",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        typeCondition: {
                                                                                                            kind: "NamedType",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "Playlist",
                                                                                                            },
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "uri",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "name",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "description",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "ownerV2",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "data",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "__typename",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "InlineFragment",
                                                                                                                                            typeCondition: {
                                                                                                                                                kind: "NamedType",
                                                                                                                                                name: {
                                                                                                                                                    kind: "Name",
                                                                                                                                                    value: "User",
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                            selectionSet: {
                                                                                                                                                kind: "SelectionSet",
                                                                                                                                                selections: [
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "name",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "images",
                                                                                                                    },
                                                                                                                    arguments: [
                                                                                                                        {
                                                                                                                            kind: "Argument",
                                                                                                                            name: {
                                                                                                                                kind: "Name",
                                                                                                                                value: "limit",
                                                                                                                            },
                                                                                                                            value: {
                                                                                                                                kind: "IntValue",
                                                                                                                                value: "1",
                                                                                                                            },
                                                                                                                        },
                                                                                                                    ],
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "items",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "sources",
                                                                                                                                            },
                                                                                                                                            selectionSet: {
                                                                                                                                                kind: "SelectionSet",
                                                                                                                                                selections: [
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "url",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "width",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "height",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "visuals",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "gallery",
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "offset",
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "0",
                                                                            },
                                                                        },
                                                                        {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "limit",
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "25",
                                                                            },
                                                                        },
                                                                    ],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "items",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "sources",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "url",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "width",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "height",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "avatarImage",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "sources",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "url",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "width",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "height",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "extractedColors",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "colorRaw",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "hex",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "headerImage",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "sources",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "url",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "width",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "height",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "extractedColors",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "colorRaw",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "hex",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "discography",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "artistDiscography",
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "stats",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "followers",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "monthlyListeners",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "worldRank",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "topCities",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "items",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "FragmentSpread",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "artistTopCity",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "relatedContent",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "appearsOn",
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "limit",
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "20",
                                                                            },
                                                                        },
                                                                    ],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "totalCount",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "items",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "releases",
                                                                                            },
                                                                                            arguments: [
                                                                                                {
                                                                                                    kind: "Argument",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "offset",
                                                                                                    },
                                                                                                    value: {
                                                                                                        kind: "IntValue",
                                                                                                        value: "0",
                                                                                                    },
                                                                                                },
                                                                                                {
                                                                                                    kind: "Argument",
                                                                                                    name: {
                                                                                                        kind: "Name",
                                                                                                        value: "limit",
                                                                                                    },
                                                                                                    value: {
                                                                                                        kind: "IntValue",
                                                                                                        value: "20",
                                                                                                    },
                                                                                                },
                                                                                            ],
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "totalCount",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "items",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "uri",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "id",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "name",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "type",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "artists",
                                                                                                                    },
                                                                                                                    arguments: [
                                                                                                                        {
                                                                                                                            kind: "Argument",
                                                                                                                            name: {
                                                                                                                                kind: "Name",
                                                                                                                                value: "limit",
                                                                                                                            },
                                                                                                                            value: {
                                                                                                                                kind: "IntValue",
                                                                                                                                value: "1",
                                                                                                                            },
                                                                                                                        },
                                                                                                                    ],
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "items",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "uri",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "profile",
                                                                                                                                            },
                                                                                                                                            selectionSet: {
                                                                                                                                                kind: "SelectionSet",
                                                                                                                                                selections: [
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "name",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "coverArt",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "sources",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "url",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "width",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "height",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "date",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "year",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "sharingInfo",
                                                                                                                    },
                                                                                                                    arguments: [
                                                                                                                        {
                                                                                                                            kind: "Argument",
                                                                                                                            name: {
                                                                                                                                kind: "Name",
                                                                                                                                value: "customData",
                                                                                                                            },
                                                                                                                            value: {
                                                                                                                                kind: "ListValue",
                                                                                                                                values: [
                                                                                                                                    {
                                                                                                                                        kind: "ObjectValue",
                                                                                                                                        fields: [
                                                                                                                                            {
                                                                                                                                                kind: "ObjectField",
                                                                                                                                                name: {
                                                                                                                                                    kind: "Name",
                                                                                                                                                    value: "key",
                                                                                                                                                },
                                                                                                                                                value: {
                                                                                                                                                    kind: "StringValue",
                                                                                                                                                    value: "wpi",
                                                                                                                                                    block: false,
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                            {
                                                                                                                                                kind: "ObjectField",
                                                                                                                                                name: {
                                                                                                                                                    kind: "Name",
                                                                                                                                                    value: "value",
                                                                                                                                                },
                                                                                                                                                value: {
                                                                                                                                                    kind: "Variable",
                                                                                                                                                    name: {
                                                                                                                                                        kind: "Name",
                                                                                                                                                        value: "locale",
                                                                                                                                                    },
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                        ],
                                                                                                                                    },
                                                                                                                                ],
                                                                                                                            },
                                                                                                                        },
                                                                                                                    ],
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "shareId",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "shareUrl",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "featuringV2",
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "limit",
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "20",
                                                                            },
                                                                        },
                                                                    ],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "totalCount",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "items",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "data",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "__typename",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        typeCondition: {
                                                                                                            kind: "NamedType",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "Playlist",
                                                                                                            },
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "uri",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "id",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "ownerV2",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "data",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "__typename",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "InlineFragment",
                                                                                                                                            typeCondition: {
                                                                                                                                                kind: "NamedType",
                                                                                                                                                name: {
                                                                                                                                                    kind: "Name",
                                                                                                                                                    value: "User",
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                            selectionSet: {
                                                                                                                                                kind: "SelectionSet",
                                                                                                                                                selections: [
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "name",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "name",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "description",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "images",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "totalCount",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "items",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "sources",
                                                                                                                                            },
                                                                                                                                            selectionSet: {
                                                                                                                                                kind: "SelectionSet",
                                                                                                                                                selections: [
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "url",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "width",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "height",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "discoveredOnV2",
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "limit",
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "20",
                                                                            },
                                                                        },
                                                                    ],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "totalCount",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "items",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "data",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "__typename",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        typeCondition: {
                                                                                                            kind: "NamedType",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "Playlist",
                                                                                                            },
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "uri",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "id",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "ownerV2",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "data",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "__typename",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                            kind: "InlineFragment",
                                                                                                                                            typeCondition: {
                                                                                                                                                kind: "NamedType",
                                                                                                                                                name: {
                                                                                                                                                    kind: "Name",
                                                                                                                                                    value: "User",
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                            selectionSet: {
                                                                                                                                                kind: "SelectionSet",
                                                                                                                                                selections: [
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "name",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "name",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "description",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "images",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "totalCount",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "items",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "sources",
                                                                                                                                            },
                                                                                                                                            selectionSet: {
                                                                                                                                                kind: "SelectionSet",
                                                                                                                                                selections: [
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "url",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "width",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        kind: "Field",
                                                                                                                                                        name: {
                                                                                                                                                            kind: "Name",
                                                                                                                                                            value: "height",
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "relatedArtists",
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "limit",
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "20",
                                                                            },
                                                                        },
                                                                    ],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "totalCount",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "items",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "id",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "uri",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "profile",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "name",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "visuals",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "avatarImage",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "sources",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "url",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "width",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "height",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "goods",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "events",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "userLocation",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "name",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "concerts",
                                                                                },
                                                                                arguments: [
                                                                                    {
                                                                                        kind: "Argument",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "offset",
                                                                                        },
                                                                                        value: {
                                                                                            kind: "IntValue",
                                                                                            value: "0",
                                                                                        },
                                                                                    },
                                                                                    {
                                                                                        kind: "Argument",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "limit",
                                                                                        },
                                                                                        value: {
                                                                                            kind: "IntValue",
                                                                                            value: "10",
                                                                                        },
                                                                                    },
                                                                                ],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "totalCount",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "items",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "uri",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "id",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "title",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "category",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "festival",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "nearUser",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "venue",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "name",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "location",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "name",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "coordinates",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "latitude",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "longitude",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "artists",
                                                                                                        },
                                                                                                        arguments: [
                                                                                                            {
                                                                                                                kind: "Argument",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "offset",
                                                                                                                },
                                                                                                                value: {
                                                                                                                    kind: "IntValue",
                                                                                                                    value: "0",
                                                                                                                },
                                                                                                            },
                                                                                                            {
                                                                                                                kind: "Argument",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "limit",
                                                                                                                },
                                                                                                                value: {
                                                                                                                    kind: "IntValue",
                                                                                                                    value: "10",
                                                                                                                },
                                                                                                            },
                                                                                                        ],
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "items",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "uri",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "id",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "profile",
                                                                                                                                },
                                                                                                                                selectionSet: {
                                                                                                                                    kind: "SelectionSet",
                                                                                                                                    selections: [
                                                                                                                                        {
                                                                                                                                            kind: "Field",
                                                                                                                                            name: {
                                                                                                                                                kind: "Name",
                                                                                                                                                value: "name",
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    ],
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "partnerLinks",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "items",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "partnerName",
                                                                                                                                },
                                                                                                                            },
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "url",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "date",
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "year",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "month",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "day",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "hour",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "minute",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "second",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "isoString",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "precision",
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "pagingInfo",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "limit",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "merch",
                                                                    },
                                                                    arguments: [
                                                                        {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "offset",
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "0",
                                                                            },
                                                                        },
                                                                        {
                                                                            kind: "Argument",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "limit",
                                                                            },
                                                                            value: {
                                                                                kind: "IntValue",
                                                                                value: "4",
                                                                            },
                                                                        },
                                                                    ],
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "items",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "FragmentSpread",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "artistMerchItem",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "artistExternalLinkItem",
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Link",
                        },
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "url",
                                },
                            },
                        ],
                    },
                },
                {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "artistDiscography",
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ArtistDiscography",
                        },
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "latest",
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "id",
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "uri",
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "name",
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "type",
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "copyright",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "items",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "type",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "text",
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "date",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "year",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "month",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "day",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "precision",
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "coverArt",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "sources",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "url",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "width",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height",
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "tracks",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "totalCount",
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "label",
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "playability",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "playable",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "reason",
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sharingInfo",
                                            },
                                            arguments: [
                                                {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "customData",
                                                    },
                                                    value: {
                                                        kind: "ListValue",
                                                        values: [
                                                            {
                                                                kind: "ObjectValue",
                                                                fields: [
                                                                    {
                                                                        kind: "ObjectField",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "key",
                                                                        },
                                                                        value: {
                                                                            kind: "StringValue",
                                                                            value: "wpi",
                                                                            block: false,
                                                                        },
                                                                    },
                                                                    {
                                                                        kind: "ObjectField",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "value",
                                                                        },
                                                                        value: {
                                                                            kind: "Variable",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "locale",
                                                                            },
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                },
                                            ],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "shareId",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "shareUrl",
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "popularReleasesAlbums",
                                },
                                arguments: [
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offset",
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "0",
                                        },
                                    },
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit",
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "10",
                                        },
                                    },
                                ],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount",
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "items",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "uri",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "type",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "copyright",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "items",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "type",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "text",
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "date",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "year",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "month",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "day",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "precision",
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "coverArt",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "sources",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "url",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "width",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "height",
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "tracks",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "totalCount",
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "label",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "playability",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "playable",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "reason",
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "sharingInfo",
                                                        },
                                                        arguments: [
                                                            {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "customData",
                                                                },
                                                                value: {
                                                                    kind: "ListValue",
                                                                    values: [
                                                                        {
                                                                            kind: "ObjectValue",
                                                                            fields: [
                                                                                {
                                                                                    kind: "ObjectField",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "key",
                                                                                    },
                                                                                    value: {
                                                                                        kind: "StringValue",
                                                                                        value: "wpi",
                                                                                        block: false,
                                                                                    },
                                                                                },
                                                                                {
                                                                                    kind: "ObjectField",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "value",
                                                                                    },
                                                                                    value: {
                                                                                        kind: "Variable",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "locale",
                                                                                        },
                                                                                    },
                                                                                },
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                            },
                                                        ],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "shareId",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "shareUrl",
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "singles",
                                },
                                arguments: [
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offset",
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "0",
                                        },
                                    },
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit",
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "10",
                                        },
                                    },
                                ],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount",
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "items",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "releases",
                                                        },
                                                        arguments: [
                                                            {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "limit",
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "1",
                                                                },
                                                            },
                                                        ],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "items",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "id",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "uri",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "name",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "type",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "copyright",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "items",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "type",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "text",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "date",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "year",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "month",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "day",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "precision",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "coverArt",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "sources",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "url",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "width",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "height",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "tracks",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "totalCount",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "label",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "playability",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "playable",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "reason",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "sharingInfo",
                                                                                },
                                                                                arguments: [
                                                                                    {
                                                                                        kind: "Argument",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "customData",
                                                                                        },
                                                                                        value: {
                                                                                            kind: "ListValue",
                                                                                            values: [
                                                                                                {
                                                                                                    kind: "ObjectValue",
                                                                                                    fields: [
                                                                                                        {
                                                                                                            kind: "ObjectField",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "key",
                                                                                                            },
                                                                                                            value: {
                                                                                                                kind: "StringValue",
                                                                                                                value: "wpi",
                                                                                                                block: false,
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            kind: "ObjectField",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "value",
                                                                                                            },
                                                                                                            value: {
                                                                                                                kind: "Variable",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "locale",
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    ],
                                                                                                },
                                                                                            ],
                                                                                        },
                                                                                    },
                                                                                ],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "shareId",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "shareUrl",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "albums",
                                },
                                arguments: [
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offset",
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "0",
                                        },
                                    },
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit",
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "10",
                                        },
                                    },
                                ],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount",
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "items",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "releases",
                                                        },
                                                        arguments: [
                                                            {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "limit",
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "1",
                                                                },
                                                            },
                                                        ],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "items",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "id",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "uri",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "name",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "type",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "copyright",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "items",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "type",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "text",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "date",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "year",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "month",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "day",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "precision",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "coverArt",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "sources",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "url",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "width",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "height",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "tracks",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "totalCount",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "label",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "playability",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "playable",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "reason",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "sharingInfo",
                                                                                },
                                                                                arguments: [
                                                                                    {
                                                                                        kind: "Argument",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "customData",
                                                                                        },
                                                                                        value: {
                                                                                            kind: "ListValue",
                                                                                            values: [
                                                                                                {
                                                                                                    kind: "ObjectValue",
                                                                                                    fields: [
                                                                                                        {
                                                                                                            kind: "ObjectField",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "key",
                                                                                                            },
                                                                                                            value: {
                                                                                                                kind: "StringValue",
                                                                                                                value: "wpi",
                                                                                                                block: false,
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            kind: "ObjectField",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "value",
                                                                                                            },
                                                                                                            value: {
                                                                                                                kind: "Variable",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "locale",
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    ],
                                                                                                },
                                                                                            ],
                                                                                        },
                                                                                    },
                                                                                ],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "shareId",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "shareUrl",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "compilations",
                                },
                                arguments: [
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offset",
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "0",
                                        },
                                    },
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit",
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "10",
                                        },
                                    },
                                ],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "totalCount",
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "items",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "releases",
                                                        },
                                                        arguments: [
                                                            {
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "limit",
                                                                },
                                                                value: {
                                                                    kind: "IntValue",
                                                                    value: "1",
                                                                },
                                                            },
                                                        ],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "items",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "id",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "uri",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "name",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "type",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "copyright",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "items",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "type",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "text",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "date",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "year",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "month",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "day",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "precision",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "coverArt",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "sources",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "url",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "width",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "height",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "tracks",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "totalCount",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "label",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "playability",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "playable",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "reason",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "sharingInfo",
                                                                                },
                                                                                arguments: [
                                                                                    {
                                                                                        kind: "Argument",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "customData",
                                                                                        },
                                                                                        value: {
                                                                                            kind: "ListValue",
                                                                                            values: [
                                                                                                {
                                                                                                    kind: "ObjectValue",
                                                                                                    fields: [
                                                                                                        {
                                                                                                            kind: "ObjectField",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "key",
                                                                                                            },
                                                                                                            value: {
                                                                                                                kind: "StringValue",
                                                                                                                value: "wpi",
                                                                                                                block: false,
                                                                                                            },
                                                                                                        },
                                                                                                        {
                                                                                                            kind: "ObjectField",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "value",
                                                                                                            },
                                                                                                            value: {
                                                                                                                kind: "Variable",
                                                                                                                name: {
                                                                                                                    kind: "Name",
                                                                                                                    value: "locale",
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    ],
                                                                                                },
                                                                                            ],
                                                                                        },
                                                                                    },
                                                                                ],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "shareId",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "shareUrl",
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "topTracks",
                                },
                                arguments: [
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offset",
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "0",
                                        },
                                    },
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit",
                                        },
                                        value: {
                                            kind: "IntValue",
                                            value: "10",
                                        },
                                    },
                                ],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "items",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "uid",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "track",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "id",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "uri",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "name",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "playcount",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "discNumber",
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "duration",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "totalMilliseconds",
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "playability",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "playable",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "reason",
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "contentRating",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "label",
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "artists",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "items",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "uri",
                                                                                            },
                                                                                        },
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "profile",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "name",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "albumOfTrack",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "uri",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "coverArt",
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "sources",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "url",
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "artistTopCity",
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CityListenerStats",
                        },
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "numberOfListeners",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "city",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "country",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "region",
                                },
                            },
                        ],
                    },
                },
                {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "artistMerchItem",
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Merch",
                        },
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "image",
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "sources",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "url",
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "description",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "price",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "uri",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "url",
                                },
                            },
                        ],
                    },
                },
            ],
        },
        fetchPlaylistMetadata: {
            kind: "Document",
            definitions: [
                {
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "fetchPlaylistMetadata",
                    },
                    variableDefinitions: [
                        {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "uri",
                                },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                    },
                                },
                            },
                        },
                        {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "offset",
                                },
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "0",
                            },
                        },
                        {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "limit",
                                },
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int",
                                },
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "50",
                            },
                        },
                    ],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "playlistV2",
                                },
                                arguments: [
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "uri",
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "uri",
                                            },
                                        },
                                    },
                                ],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "__typename",
                                            },
                                        },
                                        {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "Error",
                                                },
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "message",
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "Playlist",
                                                },
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "FetchPlaylistMetadata",
                                                        },
                                                    },
                                                    {
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "FetchPlaylistContentsDurations",
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "FetchPlaylistMetadata",
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Playlist",
                        },
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "uri",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "description",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "ownerV2",
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "playlistUser",
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "images",
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "items",
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "extractedColors",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "colorRaw",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "hex",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "isFallback",
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "imageSources",
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "collaborative",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "followers",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "format",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "attributes",
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "key",
                                            },
                                        },
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "value",
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "sharingInfo",
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "shareUrl",
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "playlistUser",
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "UserResponseWrapper",
                        },
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "data",
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "__typename",
                                            },
                                        },
                                        {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "User",
                                                },
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "uri",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "username",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "avatar",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "FragmentSpread",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "imageSources",
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "imageSources",
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Image",
                        },
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "sources",
                                },
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "imageURLAndSize",
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "imageURLAndSize",
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ImageSource",
                        },
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "url",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "width",
                                },
                            },
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "height",
                                },
                            },
                        ],
                    },
                },
                {
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "FetchPlaylistContentsDurations",
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Playlist",
                        },
                    },
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                            {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "content",
                                },
                                arguments: [
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "offset",
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "offset",
                                            },
                                        },
                                    },
                                    {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "limit",
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "limit",
                                            },
                                        },
                                    },
                                ],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [
                                        {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "__typename",
                                            },
                                        },
                                        {
                                            kind: "InlineFragment",
                                            typeCondition: {
                                                kind: "NamedType",
                                                name: {
                                                    kind: "Name",
                                                    value: "PlaylistItemsPage",
                                                },
                                            },
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "totalCount",
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "pagingInfo",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "limit",
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "items",
                                                        },
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [
                                                                {
                                                                    kind: "Field",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "item",
                                                                    },
                                                                    selectionSet: {
                                                                        kind: "SelectionSet",
                                                                        selections: [
                                                                            {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "__typename",
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                typeCondition: {
                                                                                    kind: "NamedType",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "TrackResponseWrapper",
                                                                                    },
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "data",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "__typename",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        typeCondition: {
                                                                                                            kind: "NamedType",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "Track",
                                                                                                            },
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "uri",
                                                                                                                    },
                                                                                                                },
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    alias: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "trackDuration",
                                                                                                                    },
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "duration",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "totalMilliseconds",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                typeCondition: {
                                                                                    kind: "NamedType",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "LocalTrackResponseWrapper",
                                                                                    },
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "data",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "__typename",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        typeCondition: {
                                                                                                            kind: "NamedType",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "LocalTrack",
                                                                                                            },
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    alias: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "localTrackDuration",
                                                                                                                    },
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "duration",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "totalMilliseconds",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                typeCondition: {
                                                                                    kind: "NamedType",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "EpisodeResponseWrapper",
                                                                                    },
                                                                                },
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [
                                                                                        {
                                                                                            kind: "Field",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "data",
                                                                                            },
                                                                                            selectionSet: {
                                                                                                kind: "SelectionSet",
                                                                                                selections: [
                                                                                                    {
                                                                                                        kind: "Field",
                                                                                                        name: {
                                                                                                            kind: "Name",
                                                                                                            value: "__typename",
                                                                                                        },
                                                                                                    },
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        typeCondition: {
                                                                                                            kind: "NamedType",
                                                                                                            name: {
                                                                                                                kind: "Name",
                                                                                                                value: "Episode",
                                                                                                            },
                                                                                                        },
                                                                                                        selectionSet: {
                                                                                                            kind: "SelectionSet",
                                                                                                            selections: [
                                                                                                                {
                                                                                                                    kind: "Field",
                                                                                                                    alias: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "episodeDuration",
                                                                                                                    },
                                                                                                                    name: {
                                                                                                                        kind: "Name",
                                                                                                                        value: "duration",
                                                                                                                    },
                                                                                                                    selectionSet: {
                                                                                                                        kind: "SelectionSet",
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                kind: "Field",
                                                                                                                                name: {
                                                                                                                                    kind: "Name",
                                                                                                                                    value: "totalMilliseconds",
                                                                                                                                },
                                                                                                                            },
                                                                                                                        ],
                                                                                                                    },
                                                                                                                },
                                                                                                            ],
                                                                                                        },
                                                                                                    },
                                                                                                ],
                                                                                            },
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
}

export default GraphQL
