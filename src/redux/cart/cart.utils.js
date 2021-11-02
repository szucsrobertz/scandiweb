export const addItemToCart = (cartItems, cartItemToAdd,size,colorSelected,capacity,usb,touchId) => {   
    
        if(size > 0){
            const existingCartItem = cartItems.find(
                cartItem => (cartItem.size === size) && (cartItem.id === cartItemToAdd.id)
            )
            if (existingCartItem) {
                return cartItems.map(cartItem =>
                   ( cartItem.size === size ) && (cartItem.id === cartItemToAdd.id)
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            }
        } else if(!size) {
            const existingCartItem = cartItems.find(
                cartItem => (cartItem.size === cartItemToAdd.size) && (cartItem.id === cartItemToAdd.id)
            )
            if (existingCartItem) {
                return cartItems.map(cartItem =>
                    (cartItem.size === cartItemToAdd.size) && (cartItem.id === cartItemToAdd.id)
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            }
        }

        if(capacity  && colorSelected){
            const existingCartItem = cartItems.find(
                cartItem =>( cartItem.capacity === capacity  ) &&( cartItem.colorSelected === colorSelected  ) && (cartItem.id === cartItemToAdd.id)
            )
            if (existingCartItem) {
                return cartItems.map(cartItem =>
                    (cartItem.capacity === capacity )  &&( cartItem.colorSelected === colorSelected  ) && (cartItem.id === cartItemToAdd.id)
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            }
        } else {
            const existingCartItem = cartItems.find(
                cartItem => (cartItem.capacity === cartItemToAdd.capacity) &&(cartItem.colorSelected=== cartItemToAdd.colorSelected) && (cartItem.id === cartItemToAdd.id)
            )
            if (existingCartItem) {
                return cartItems.map(cartItem =>
                    (cartItem.capacity === cartItemToAdd.capacity) &&(cartItem.colorSelected=== cartItemToAdd.colorSelected) && (cartItem.id === cartItemToAdd.id)
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            }
        }

        if(capacity && usb && touchId){
            const existingCartItem= cartItems.find(
                cartItem =>( cartItem.capacity === capacity  ) &&( cartItem.usb === usb  ) && ( cartItem.touchId === touchId  )&& (cartItem.id === cartItemToAdd.id)
            )
            if (existingCartItem) {
                return cartItems.map(cartItem =>
                    (cartItem.capacity === capacity )  &&( cartItem.usb === usb  ) && ( cartItem.touchId === touchId  )&& (cartItem.id === cartItemToAdd.id)
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            }
        } else {
            const existingCartItem = cartItems.find(
                cartItem => (cartItem.capacity=== cartItemToAdd.capacity) &&(cartItem.usb=== cartItemToAdd.usb) &&(cartItem.touchId=== cartItemToAdd.touchId)&& (cartItem.id === cartItemToAdd.id) 
            )
            if (existingCartItem) {
                return cartItems.map(cartItem =>
                    (cartItem.capacity === cartItemToAdd.capacity)  &&(cartItem.usb=== cartItemToAdd.usb) &&(cartItem.touchId=== cartItemToAdd.touchId) && (cartItem.id === cartItemToAdd.id)
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            }
      
        }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 , size: size, colorSelected:colorSelected,capacity:capacity,usb:usb,touchId:touchId}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
if(!cartItemToRemove.size && !cartItemToRemove.capacity && !cartItemToRemove.colorSelected && !cartItemToRemove.usb && !cartItemToRemove.touchId){
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem)

}

  if(cartItemToRemove.size){
    
    const existingCartItem = cartItems.find(
        cartItem => (cartItem.size === cartItemToRemove.size )
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.size !== cartItemToRemove.size  )

    }

    return cartItems.map(cartItem =>
        cartItem.size === cartItemToRemove.size 
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem)

  } 

  if(cartItemToRemove.capacity && cartItemToRemove.colorSelected){
        
    const existingCartItem = cartItems.find(
        cartItem => (cartItem.capacity === cartItemToRemove.capacity && cartItem.colorSelected === cartItemToRemove.colorSelected)
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.capacity !== cartItemToRemove.capacity || cartItem.colorSelected !== cartItemToRemove.colorSelected )
    }

    return cartItems.map(cartItem =>
        cartItem.capacity === cartItemToRemove.capacity && cartItem.colorSelected === cartItemToRemove.colorSelected
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem)
  }


  if(cartItemToRemove.capacity && cartItemToRemove.usb && cartItemToRemove.touchId){
    const existingCartItem = cartItems.find(
        cartItem => (cartItem.capacity === cartItemToRemove.capacity && cartItem.usb === cartItemToRemove.usb && cartItem.touchId === cartItemToRemove.touchId)
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.capacity !== cartItemToRemove.capacity || cartItem.usb !== cartItemToRemove.usb || cartItem.touchId !== cartItemToRemove.touchId )
    }

    return cartItems.map(cartItem =>
        cartItem.capacity === cartItemToRemove.capacity && cartItem.usb === cartItemToRemove.usb && cartItem.touchId === cartItemToRemove.touchId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem)
  }

}

