package com.app.demo.service2;

import java.util.List;

public interface ITaxService {
   String getTaxBracket(int income);
   List<String> allBrackets();
}
