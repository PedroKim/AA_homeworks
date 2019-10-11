def sum_to(n)
    return nil if n < 1
    return 1 if n == 1

    n + sum_to(n - 1)
end

def add_numbers(nums_array)
    return nil if nums_array.length == 0
    return nums_array[0] if nums_array.length == 1

    nums_array[0] + add_numbers(nums_array[1..-1])
end

def gamma_fnc(n)
    return nil if n <= 0
    return 1 if n == 1

    (n - 1) * gamma_fnc(n - 1)
end

def ice_cream_shop(flavors, favorite)
    return false if flavors.length == 0

    if flavors[0] == favorite
        return true
    else
        ice_cream_shop(flavors[1..-1], favorite)
    end
end

def reverse(str)
    return str if str.length <= 1

    str[-1] + reverse(str[0..-2])
end