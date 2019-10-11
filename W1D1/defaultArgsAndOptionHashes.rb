def modify_string(str, options={"upper"=>false, "repeats"=>1})
    str.upcase! if options["upper"]
    p str * options["repeats"]
end

# less readable

# more readable
modify_string("bye")
modify_string("bye", "upper"=>true, "repeats"=>3)

