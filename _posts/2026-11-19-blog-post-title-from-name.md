## First blog 💫

There are questions on why proof theory and category theory should. have anything to do with tetration that has bugged me. I mean, there exists halting code to formalize a proof, but how is this verified in the same fashion? One clue is sequent calculus helps create the same diagonalization construction as Hilbert did with Riemann. An arguement of countability is Cantor's proof on numbers. Looking at how polynomials treat these equations as arcs from rings present the question if these sets are `wild` or `tame` which is supported in functional code in programming languages such as Agda. The question remains if the proof window is stisfiable by a token size for a local llm.
---

### This is a header

#### Some Agda Code

```agda
module HomSets where
-- A type is a set when any two proofs of equality are themselves equal.
IsSet : Set → Set
IsSet X = (x y : X) → (p q : x ≡ y) → p ≡ q

``
