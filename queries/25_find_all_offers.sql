SELECT c.NameEN, o.`Year`, o.OfferID, o.PositionNameEN, o.PositionNameTH, o.PositionDescriptionEN, o.PositionDescriptionTH
FROM internship_offer o NATURAL LEFT JOIN company c;