// types/star-wars.ts

// This interface describes the structure of a Character object.
// It tells TypeScript what properties a character must have
// and what type each property should be.
// All property names match the API names
export interface Character {
    _id: string;
    name: string;
    description: string;
    image: string;
}