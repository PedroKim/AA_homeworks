# p [11, 7, 2, 4].inject { |acc, el| acc * el }

# finding min using inject
# p [11, 7, 2, 4].inject do |acc, el|
#     if el < acc
#         el
#     else
#         acc
#     end
# end # giving me an error. Revisit in future

# assigning initial accumulator
# p [11, 7, 2, 4].inject(100) { |acc, el| acc + el }

[11, 7, 2, 4].inject(0) do |acc, el|
    if el.even?
        acc + el
    else
        acc
    end
end
