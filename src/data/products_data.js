export const PRODUCTS_DATA = [
        {
            name: "Onze Bierkaart", note: "meer dan 80 biertjes die je eens geprobeerd moet hebben.",
            subcategories: [
                {
                    name: "Tap",
                    products: [
                        {
                            id: "Bavik small", name: "Bavik", size: 25, percentage: 5.2, price: 2.5,
                            brewery: "Brouwerij De Brabandere",
                            info: "Bavik Super Pils heeft zijn unieke smaak en aroma te danken aan zijn bijzondere brouwproces. " +
                                "Onze pils wordt tijdens het brouwproces niet verdund waardoor we een volmondige smaak garanderen. " +
                                "Bovendien gebruiken we enkel aromahoppen wat zorgt voor een verfijnde bittere smaak en een verfrissend aroma. " +
                                "Een lange en koude lagering (30 dagen) verzekert een natuurlijke helderheid en stabiliteit. " +
                                "Als laatste ondergaat deze pils geen pasteurisatie. Deze vier elementen samen maken onze Bavik Super Pils uniek. Never compromise on taste!"
                        },
                        {
                            id: "Bavik large", name: "Bavik", size: 33, percentage: 5.2, price: 3.1,
                            brewery: "Brouwerij De Brabandere",
                            info: "Bavik Super Pils heeft zijn unieke smaak en aroma te danken aan zijn bijzondere brouwproces. " +
                                "Onze pils wordt tijdens het brouwproces niet verdund waardoor we een volmondige smaak garanderen. " +
                                "Bovendien gebruiken we enkel aromahoppen wat zorgt voor een verfijnde bittere smaak en een verfrissend aroma. " +
                                "Een lange en koude lagering (30 dagen) verzekert een natuurlijke helderheid en stabiliteit. " +
                                "Als laatste ondergaat deze pils geen pasteurisatie. Deze vier elementen samen maken onze Bavik Super Pils uniek. Never compromise on taste!"
                        },
                        {
                            id: "La Chouffe small", name: "La Chouffe", size: 25, percentage: 8, price: 3.5,
                            brewery: "Brouwerij Achouffe",
                            info: "LA CHOUFFE leaves citrus notes on the palate, followed by a refreshing, pleasantly spicy note, " +
                                "giving it a lovely lightness. With its 8% alcohol content and slightly hoppy taste, " +
                                "this golden beer has won over beer lovers from all over the world down the years. Its unique taste has won various awards."
                        },
                        {
                            id: "La Chouffe large", name: "La Chouffe", size: 33, percentage: 8, price: 4.2,
                            brewery: "Brouwerij Achouffe",
                            info: "LA CHOUFFE leaves citrus notes on the palate, followed by a refreshing, pleasantly spicy note, " +
                                "giving it a lovely lightness. With its 8% alcohol content and slightly hoppy taste, " +
                                "this golden beer has won over beer lovers from all over the world down the years. Its unique taste has won various awards."
                        },
                        {
                            id: "Vedett IPA", name: "Vedett IPA", size: 33, percentage: 6, price: 3.5,
                            brewery: "Brouwerij Duvel Moortgat",
                            info: "The inventors of Indian Pale Ale may have originally added extra hops to help it survive the long voyage to India. But we just do it for the taste! " +
                                "Every drop as thirst-quenching as the last, Vedett IPA offers an explosion of flavoursome bitterness that increases with intensity towards the finish, " +
                                "tempered by an unparalleled velvety smoothness resulting in a very accessible taste. " +
                                "Fresh, fruity and floral notes give way to touches of caramel sweetness, " +
                                "hile its superb, lingering aftertaste continues to tantalise the tastebuds long after. " +
                                "Here’s to a great-tasting, refreshing beer!"
                        },
                        {
                            id: "Gouden Carolus Tripel", name: "Gouden Carolus Tripel", size: 33, percentage: 8, price: 4,
                            brewery: "Het Anker",
                            info: "Despite the technological advances, this beer is brewed according to ancient tradition and unites, as before, " +
                                "the best raw materials from our soil as ripe barley and fine hops, to preserve a maximum of pure flavor. " +
                                "This beer was originally brewed for the Knights of the Golden Fleece in 1491. " +
                                "Full graceful tenderness, with a clean and neat taste, this beer will enchant you: " +
                                "matured in the bottle, exclusively obtained from pale malt, highly fermented and 100% natural. "
                        }
                    ]
                },
                {
                    name: "Craft",
                    note: "We werken samen met ambachtelijke brouwerijen, die maar een bepaalde hoeveelheid kunnen produceren. Sommige bieren kunnen hierdoor tijdelijk uit stock zijn.",
                    products: [
                        {id: "Antigoon", name: "Antigoon", size: 33, percentage: 7, price: 4.5},
                        {id: "Bittere Bloemen", name: "Bittere Bloemen", size: 33, percentage: 6, price: 4.9},
                        {id: "XX Bitter", name: "XX Bitter", size: 33, percentage: 6, price: 4.5},
                        {id: "Bersalis Tripel", name: "Bersalis Tripel", size: 33, percentage: 9.5, price: 4.2},
                        {id: "Hoogheid", name: "Hoogheid", size: 33, percentage: 9, price: 3.5},
                        {id: "Taras Boulba", name: "Taras Boulba", size: 33, percentage: 4.5, price: 4},
                        {id: "Stouterik", name: "Stouterik", size: 33, percentage: 4.5, price: 4},
                        {
                            id: "Wieze", name: "Wieze", size: 33, percentage: 8.5, price: 4,
                            brewery: "Brouwerij De Brabandere",
                            info: "Eigenwieze Wieze... Bier, dat moet voor ons geen toeters of bellen hebben – maar wel ballen. " +
                                "En we vermoeden van jou hetzelfde, of je zou dit nu niet aan het lezen zijn. " +
                                "Onthoud gewoon: het is een lekkere tripel. Meer valt daar niet over te zeggen."
                        }
                    ]
                },
                {
                    name: "Mechels",
                    products: [
                        {id: "Maneblusser", name: "Maneblusser", size: 33, percentage: 5.8, price: 3},
                        {
                            id: "Gouden Carolus Classic",
                            name: "Gouden Carolus Classic",
                            size: 33,
                            percentage: 8.5,
                            price: 3.9
                        },
                        {
                            id: "Gouden Carolus Hopsinjoor",
                            name: "Gouden Carolus Hopsinjoor",
                            size: 33,
                            percentage: 9,
                            price: 4.2
                        },
                        {
                            id: "Gouden Carolus Whisky Infused",
                            name: "Gouden Carolus Whisky Infused",
                            size: 33,
                            percentage: 11.7,
                            price: 5
                        },
                        {id: "Biere de Guerre", name: "Biere de Guerre", size: 33, percentage: 8, price: 4.2},
                        {id: "Floral Dodoens", name: "Floral Dodoens", size: 33, percentage: 7, price: 4.9},
                        {id: "Patron", name: "Patron", size: 33, percentage: 6.4, price: 4.5}
                    ]
                }]
        },
        {
            name: "Andere dranken",
            subcategories: [
                {
                    name: "Home Lemon(m)ade",
                    products: [
                        {id: "Strawberry Mint", name: "Strawberry Mint", price: 3.5},
                        {id: "Spicy Ginger", name: "Spicy Ginger", price: 3.5},
                        {id: "Sunny Lemon", name: "Sunny Lemon", price: 3.5},
                        {id: "Tripcal Mango and Pineapple", name: "Tripcal Mango and Pineapple", price: 3.5}
                    ]
                },
                {
                    name: "Fris",
                    products: [
                        {id: "Coca cola / Coca cola zero", name: "Coca cola / Coca cola zero", price: 2.5},
                        {id: "Spa rood", name: "Spa rood", price: 2.2},
                        {id: "Spa blauw", name: "Spa blauw", price: 2.2},
                        {id: "Fanta", name: "Fanta", price: 2.5},
                        {id: "Cecemel", name: "Cecemel", price: 2.8},
                        {id: "Ice tea", name: "Ice tea", price: 2.5},
                        {id: "Ice tea Green", name: "Ice tea Green", price: 2.5}
                    ]
                }
            ]
        }
        ,
        {
            name: "Lunch en hapjes",
            note: "Bij ons kan je ook heel lekker eten. Van kleine snacks tot mooie brunches. ‘s Avonds kan je terecht voor onze Macaroni’s, ’s middags serveren we je ovenverse croques met een twist.",
            subcategories: [
                {
                    name: "Croques", note: "Alle croques worden vergezeld door een slaatje",
                    products: [
                        {
                            id: "Camille", name: "Camille",
                            price: 12,
                            note: "Camembert, walnoten, rode ui en augurk, vergezeld van een krielslaatje."
                        },
                        {
                            id: "Geike", name: "Geike",
                            price: 12,
                            note: "Geitenkaas, spinazie, groene appel, groene pesto, vergezeld van een krielslaatje."
                        },
                        {
                            id: "Brienne", name: "Brienne",
                            price: 12,
                            note: "Brie, walnoten, honing, rucola, vergezeld van een krielslaatje."
                        },
                        {
                            id: "Caesar", name: "Caesar",
                            price: 12,
                            note: "Gerookte kip, groene pesto, rode ui, tomaat, caesar dressing en rucola, vergezeld van een krielslaatje."
                        },
                        {id: "Otto-Kaas Ham", name: "Otto-Kaas Ham", price: 13.5, note: "Gouda, ham, augurk"},
                        {
                            id: "Mozart", name: "Mozart",
                            price: 10.5,
                            note: "Mozzarella, basilicum, parmaham, vergezeld van een krielslaatje.\n"
                        }
                    ]
                },
                {
                    name: "Hongerkes",
                    products: [
                        {id: "Boulet", name: "Boulet", price: 3.5},
                        {id: "Droge worst", name: "Droge worst", price: 3.5},
                        {id: "Portie kaas", name: "Portie kaas", price: 5},
                        {id: "Kaasplank + brood", name: "Kaasplank + brood", price: 9.5},
                        {id: "Vleesplank + brood", name: "Vleesplank + brood", price: 8},
                        {id: "Chips", name: "Chips", price: 2, note: "Paprika, Zout, Grills, Bolognaise"},
                    ]
                }, {
                    name: "Avondkost",
                    products: [
                        {
                            id: "Classic Macaroni",
                            name: "Classic Macaroni",
                            price: 14.5,
                            note: "Macaroni in kaassaus met ham"
                        },
                        {
                            id: "Veggie Macaroni",
                            name: "Veggie Macaroni",
                            price: 13,
                            note: "Macaroni in kaassaus met versgebakken champignons"
                        },
                        {
                            id: "Macaroni van het Huis",
                            name: "Macaroni van het Huis",
                            price: 14.5,
                            note: "Macaroni met saus van 3 kazen, prei en ham"
                        },
                    ]
                }]
        }
    ]
;
